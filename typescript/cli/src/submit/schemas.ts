import { z } from 'zod';

import {
  EV5GnosisSafeTxSubmitterPropsSchema,
  EV5ImpersonatedAccountTxSubmitterPropsSchema,
  EV5InterchainAccountTxTransformerPropsSchema,
  TxSubmitterType,
  TxTransformerType,
} from '@hyperlane-xyz/sdk';

export const TransformerMetadataSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(TxTransformerType.INTERCHAIN_ACCOUNT),
    props: EV5InterchainAccountTxTransformerPropsSchema,
  }),
]);
export const SubmitterMetadataSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(TxSubmitterType.JSON_RPC),
    props: z.object({}).optional(),
  }),
  z.object({
    type: z.literal(TxSubmitterType.IMPERSONATED_ACCOUNT),
    props: EV5ImpersonatedAccountTxSubmitterPropsSchema,
  }),
  z.object({
    type: z.literal(TxSubmitterType.GNOSIS_SAFE),
    props: EV5GnosisSafeTxSubmitterPropsSchema,
  }),
]);

export const SubmissionStrategySchema = z.object({
  chain: z.string(),
  submitter: SubmitterMetadataSchema,
  transforms: z.array(TransformerMetadataSchema).optional(),
});
