import {
  PopulatedTransaction,
  PopulatedTransactionSchema,
} from '@hyperlane-xyz/sdk';
import { assert } from '@hyperlane-xyz/utils';

import { WriteCommandContext } from '../context/types.js';
import { readYamlOrJson } from '../utils/files.js';

import { getSubmitterBuilder } from './submit.js';

export async function runSubmit({
  context,
  transactionsFilepath,
}: {
  context: WriteCommandContext;
  transactionsFilepath: string;
}) {
  const { submissionStrategy, chainMetadata, multiProvider, isDryRun } =
    context;

  assert(
    submissionStrategy,
    'Submission strategy required to submit transactions.\nPlease create a submission strategy, e.g. ./strategy.yaml.',
  );

  const chain = submissionStrategy.chain;
  const protocol = chainMetadata[chain].protocol;
  const submitterBuilder = await getSubmitterBuilder<typeof protocol>({
    submitterMetadata: submissionStrategy.submitter,
    transformersMetadata: submissionStrategy.transforms ?? [],
    multiProvider,
    chain: submissionStrategy.chain,
    isDryRun,
  });
  const transactions = getTransactions(transactionsFilepath);
  const transactionReceipts = await submitterBuilder.submit(...transactions);

  if (transactionReceipts)
    console.log('🧾 Transaction receipts:', transactionReceipts);
}

function getTransactions(transactionsFilepath: string): PopulatedTransaction[] {
  const transactionsFileContent = readYamlOrJson<any[] | undefined>(
    transactionsFilepath.trim(),
  );
  assert(
    transactionsFileContent,
    'Transactions required to submit transactions.\nPlease add a transactions file, e.g. ./transactions.json.',
  );
  return transactionsFileContent.map((tx) =>
    PopulatedTransactionSchema.parse(tx),
  );
}
