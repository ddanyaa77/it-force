import { CreateTransactionRequest, TransactionAction } from '../types/transaction.types';
export declare class CreateTransactionReqDto implements CreateTransactionRequest {
    id: string;
    userId: number;
    action: TransactionAction;
    amount: number;
}
