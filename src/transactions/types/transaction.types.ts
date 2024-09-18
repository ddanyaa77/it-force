// Types repository simulation

export const TransactionsControllerAddress = 'transactions';

export enum TransactionAction {
  DEDUCTION = 'DEDUCTION',
  REPLENISHMENT = 'REPLENISHMENT',
}

export const CreateTransactionAddress = `${TransactionsControllerAddress}`;
export interface CreateTransactionRequest {
  id: string;
  userId: number;
  action: TransactionAction;
  amount: number;
}
export interface CreateTransactionResponse {
  success: boolean;
}

export const CompensateTransactionAddress = `${TransactionsControllerAddress}/:id`;
export type CompensateTransactionRequest = Record<string, never>;
export interface CompensateTransactionResponse {
  success: boolean;
}
