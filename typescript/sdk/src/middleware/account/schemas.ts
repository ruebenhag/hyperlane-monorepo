import { z } from 'zod';

import { ZHash } from '../../index.js';
import { ZChainName } from '../../metadata/customZodTypes.js';
import {
  BigNumberSchema,
  CallDataSchema,
} from '../../providers/transactions/schemas.js';

export const AccountConfigSchema = z.object({
  origin: ZChainName,
  owner: ZHash,
  localRouter: ZHash.optional(),
  routerOverride: ZHash.optional(),
  ismOverride: ZHash.optional(),
});

export const GetCallRemoteSettingsSchema = z.object({
  chain: ZChainName,
  destination: ZChainName,
  innerCalls: z.array(CallDataSchema),
  config: AccountConfigSchema,
  hookMetadata: BigNumberSchema.optional(),
});
