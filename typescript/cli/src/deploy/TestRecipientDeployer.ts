import debug from 'debug';

import { TestRecipient, TestRecipient__factory } from '@hyperlane-xyz/core';
import {
  ChainName,
  HyperlaneDeployer,
  MultiProvider,
} from '@hyperlane-xyz/sdk';
import { Address, eqAddress } from '@hyperlane-xyz/utils';

export type TestRecipientConfig = {
  interchainSecurityModule: Address;
};

export type TestRecipientContracts = {
  testRecipient: TestRecipient;
};

export type TestRecipientAddresses = {
  testRecipient: Address;
};

export const testRecipientFactories = {
  testRecipient: new TestRecipient__factory(),
};

export class TestRecipientDeployer extends HyperlaneDeployer<
  TestRecipientConfig,
  typeof testRecipientFactories
> {
  constructor(multiProvider: MultiProvider) {
    super(multiProvider, testRecipientFactories, {
      logger: debug('hyperlane:TestRecipientDeployer'),
    });
  }

  async deployContracts(
    chain: ChainName,
    config: TestRecipientConfig,
  ): Promise<TestRecipientContracts> {
    const testRecipient = await this.deployContract(chain, 'testRecipient', []);
    try {
      this.logger(`Checking ISM ${chain}`);
      const ism = await testRecipient.interchainSecurityModule();
      this.logger(`Found ISM for on ${chain}: ${ism}`);
      if (!eqAddress(ism, config.interchainSecurityModule)) {
        this.logger(`Current ISM does not match config. Updating.`);
        const tx = testRecipient.setInterchainSecurityModule(
          config.interchainSecurityModule,
        );
        await this.multiProvider.handleTx(chain, tx);
      }
    } catch (error) {
      this.logger(`Failed to check/update ISM for ${chain}: ${error}`);
      this.logger('Leaving ISM as is and continuing.');
    }
    return {
      testRecipient,
    };
  }
}