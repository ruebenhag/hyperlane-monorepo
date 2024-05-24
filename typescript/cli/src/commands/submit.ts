import { CommandModuleWithWriteContext } from '../context/types.js';
import { logBlue, logGray } from '../logger.js';
import { runSubmit } from '../submit/submitCommand.js';

import {
  dryRunCommandOption,
  strategyCommandOption,
  transactionsCommandOption,
} from './options.js';

/**
 * Submit command
 */
export const submitCommand: CommandModuleWithWriteContext<{
  transactions: string;
  strategy: string;
  'dry-run': string;
}> = {
  command: 'submit',
  describe: 'Submit transactions',
  builder: {
    transactions: transactionsCommandOption,
    strategy: strategyCommandOption,
    'dry-run': dryRunCommandOption,
  },
  handler: async ({ context, transactions }) => {
    logGray(`Hyperlane Submit`);
    logGray(`----------------`);

    await runSubmit({
      context,
      transactionsFilepath: transactions,
    });

    logBlue(`✅ Submission complete`);
    process.exit(0);
  },
};
