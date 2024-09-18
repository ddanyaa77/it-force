export declare const TransactionsControllerAddress = "transactions";
export declare enum TransactionAction {
    DEDUCTION = "DEDUCTION",
    REPLENISHMENT = "REPLENISHMENT"
}
export declare const CreateTransactionAddress = "transactions";
export interface CreateTransactionRequest {
    id: string;
    userId: number;
    action: TransactionAction;
    amount: number;
}
export interface CreateTransactionResponse {
    success: boolean;
}
export declare const CompensateTransactionAddress = "transactions/:id";
export type CompensateTransactionRequest = Record<string, never>;
export interface CompensateTransactionResponse {
    success: boolean;
}
