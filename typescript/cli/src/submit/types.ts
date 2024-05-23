import { z } from 'zod';

import type { ChainName, MultiProvider } from '@hyperlane-xyz/sdk';

import {
  SubmissionStrategySchema,
  SubmitterMetadataSchema,
  TransformerMetadataSchema,
} from './schemas.js';

export type SubmitterMetadata = z.infer<typeof SubmitterMetadataSchema>;
export type TransformerMetadata = z.infer<typeof TransformerMetadataSchema>;
export type SubmissionStrategy = z.infer<typeof SubmissionStrategySchema>;

export interface SubmitterBuilderSettings {
  submitterMetadata: SubmitterMetadata;
  transformersMetadata: TransformerMetadata[];
  multiProvider: MultiProvider;
  chain: ChainName;
  isDryRun?: boolean;
}
