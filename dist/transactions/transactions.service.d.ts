import { CreateTransactionReqDto } from './dto/create-transaction.dto';
import { CompensateTransactionResponse, CreateTransactionResponse } from './types/transaction.types';
import { TransactionsRepository } from './transactions.repository';
export declare class TransactionsService {
    private readonly transactionsRepository;
    constructor(transactionsRepository: TransactionsRepository);
    create(transaction: CreateTransactionReqDto): Promise<CreateTransactionResponse>;
    compensate(id: string): Promise<CompensateTransactionResponse>;
}
