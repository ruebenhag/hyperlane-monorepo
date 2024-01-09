import { expect } from 'chai';
import { BigNumber } from 'ethers';

import {
  ChainMap,
  GasOracleContractType,
  HookType,
  HooksConfig,
  MultiProvider,
} from '@hyperlane-xyz/sdk';

import { readHooksConfigMap } from '../config/hooks.js';

describe('readHooksConfigMap', () => {
  let multiProvider: MultiProvider;

  it('parses and validates example correctly', async () => {
    const hooks = await readHooksConfigMap(
      multiProvider, // only to compile, actually not being used
      'src/tests/hooks/test-example.yaml',
    );

    const exampleHooksConfig: ChainMap<HooksConfig> = {
      test1: {
        required: {
          type: HookType.PROTOCOL_FEE,
          owner: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          beneficiary: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          maxProtocolFee: '1000000000000000000',
          protocolFee: '200000000000000',
        },
        default: {
          type: HookType.ROUTING,
          owner: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          domains: {
            test2: {
              type: HookType.AGGREGATION,
              hooks: [
                {
                  type: HookType.MERKLE_TREE,
                },
                {
                  type: HookType.INTERCHAIN_GAS_PAYMASTER,
                  beneficiary: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                  owner: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                  oracleKey: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                  oracleConfig: {
                    test2: {
                      type: GasOracleContractType.StorageGasOracle,
                      tokenExchangeRate: BigNumber.from('10000000000'),
                      gasPrice: BigNumber.from('12345'),
                    },
                  },
                  overhead: { test2: BigNumber.from('50000') },
                },
              ],
            },
          },
        },
      },
      test2: {
        required: {
          type: HookType.INTERCHAIN_GAS_PAYMASTER,
          beneficiary: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          owner: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          oracleKey: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          oracleConfig: {
            test1: {
              type: GasOracleContractType.StorageGasOracle,
              tokenExchangeRate: BigNumber.from('10000000000'),
              gasPrice: BigNumber.from('12345'),
            },
          },
          overhead: { test1: BigNumber.from('50000') },
        },
        default: {
          type: HookType.ROUTING,
          owner: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          domains: {
            test1: {
              type: HookType.AGGREGATION,
              hooks: [
                {
                  type: HookType.MERKLE_TREE,
                },
                {
                  type: HookType.INTERCHAIN_GAS_PAYMASTER,
                  beneficiary: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                  owner: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                  oracleKey: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
                  oracleConfig: {
                    test1: {
                      type: GasOracleContractType.StorageGasOracle,
                      tokenExchangeRate: BigNumber.from('10000000000'),
                      gasPrice: BigNumber.from('12345'),
                    },
                  },
                  overhead: { test1: BigNumber.from('50000') },
                },
              ],
            },
          },
        },
      },
    };
    expect(hooks).to.deep.equal(exampleHooksConfig);
  });

  it('parsing failure, missing internal key "overhead"', async () => {
    try {
      await readHooksConfigMap(
        multiProvider,
        'src/tests/hooks/safe-parse-fail.yaml',
      );
      throw new Error('Expected readHooksConfigMap to throw, but it did not');
    } catch (err) {
      expect((err as Error).message).to.equal(
        'Invalid hook config: test2,default => Invalid input',
      );
    }
  });
});