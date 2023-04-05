import {
  HyperlaneCore,
  HyperlaneCoreChecker,
  HyperlaneIgp,
  HyperlaneIgpChecker,
  InterchainAccount,
  InterchainAccountChecker,
  InterchainQuery,
  InterchainQueryChecker,
} from '@hyperlane-xyz/sdk';
import { HyperlaneIsmFactory } from '@hyperlane-xyz/sdk/dist/ism/HyperlaneIsmFactory';

import { deployEnvToSdkEnv } from '../src/config/environment';
import { HyperlaneCoreGovernor } from '../src/core/govern';
import { HyperlaneIgpGovernor } from '../src/gas/govern';
import { HyperlaneAppGovernor } from '../src/govern/HyperlaneAppGovernor';
import { InterchainAccountGovernor } from '../src/middleware/account/govern';
import { InterchainQueryGovernor } from '../src/middleware/query/govern';
import { impersonateAccount, useLocalProvider } from '../src/utils/fork';

import {
  Modules,
  getArgsWithModuleAndFork,
  getEnvironmentConfig,
  getRouterConfig,
} from './utils';

async function check() {
  const { fork, govern, module, environment } = await getArgsWithModuleAndFork()
    .boolean('govern')
    .default('govern', false)
    .alias('g', 'govern').argv;
  const config = await getEnvironmentConfig();
  const multiProvider = await config.getMultiProvider();

  // must rotate to forked provider before building core contracts
  if (fork) {
    await useLocalProvider(multiProvider, fork);
    if (govern) {
      const owner = config.core[fork].owner;
      const signer = await impersonateAccount(owner);
      multiProvider.setSigner(fork, signer);
    }
  }

  let governor: HyperlaneAppGovernor<any, any>;
  const env = deployEnvToSdkEnv[environment];
  if (module === Modules.CORE) {
    const core = HyperlaneCore.fromEnvironment(env, multiProvider);
    const ismFactory = HyperlaneIsmFactory.fromEnvironment(env, multiProvider);
    const checker = new HyperlaneCoreChecker(
      multiProvider,
      core,
      config.core,
      ismFactory,
    );
    governor = new HyperlaneCoreGovernor(checker, config.owners);
  } else if (module === Modules.INTERCHAIN_GAS_PAYMASTER) {
    const igp = HyperlaneIgp.fromEnvironment(env, multiProvider);
    const checker = new HyperlaneIgpChecker(multiProvider, igp, config.igp);
    governor = new HyperlaneIgpGovernor(checker, config.owners);
  } else if (module === Modules.INTERCHAIN_ACCOUNTS) {
    const config = await getRouterConfig(environment, multiProvider);
    const ica = InterchainAccount.fromEnvironment(env, multiProvider);
    const checker = new InterchainAccountChecker(multiProvider, ica, config);
    governor = new InterchainAccountGovernor(checker, config.owners);
  } else if (module === Modules.INTERCHAIN_QUERY_SYSTEM) {
    const config = await getRouterConfig(environment, multiProvider);
    const iqs = InterchainQuery.fromEnvironment(env, multiProvider);
    const checker = new InterchainQueryChecker(multiProvider, iqs, config);
    governor = new InterchainQueryGovernor(checker, config.owners);
  } else {
    console.log(`Skipping ${module}, checker or governor unimplemented`);
    return;
  }

  if (fork) {
    await governor.checker.checkChain(fork);
    if (govern) {
      await governor.govern(false, fork);
    }
  } else {
    await governor.checker.check();
    if (govern) {
      await governor.govern();
    }
  }

  if (!govern) {
    const violations = governor.checker.violations;
    if (violations.length > 0) {
      console.table(violations, [
        'chain',
        'remote',
        'name',
        'type',
        'subType',
        'actual',
        'expected',
      ]);
      throw new Error(
        `Checking ${module} deploy yielded ${violations.length} violations`,
      );
    } else {
      console.info(`${module} Checker found no violations`);
    }
  }
}

check()
  .then()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
