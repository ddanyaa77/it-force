import { CreateTransactionResponse } from './types/transaction.types';
import { TransactionsService } from './transactions.service';
import { CreateTransactionReqDto } from './dto/create-transaction.dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    createTransaction(body: CreateTransactionReqDto): Promise<CreateTransactionResponse>;
    compensateTransaction(id: string): Promise<import("./types/transaction.types").CompensateTransactionResponse>;
}
