import { TransactionAction } from './types/transaction.types';

export const TransactionActionCompensationMap: Record<
  TransactionAction,
  TransactionAction
> = {
  [TransactionAction.DEDUCTION]: TransactionAction.REPLENISHMENT,
  [TransactionAction.REPLENISHMENT]: TransactionAction.DEDUCTION,
};
