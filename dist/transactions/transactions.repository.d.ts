import { DataSource, Repository } from 'typeorm';
import { CreateTransactionReqDto } from './dto/create-transaction.dto';
import { UserTransaction } from './entity/transaction.entity';
export declare class TransactionsRepository {
    private readonly transactionsRepo;
    private readonly dataSource;
    constructor(transactionsRepo: Repository<UserTransaction>, dataSource: DataSource);
    create(transaction: CreateTransactionReqDto): Promise<void>;
    findOne(transactionId: string): Promise<UserTransaction | null>;
    deleteOne(transactionId: string): Promise<import("typeorm").DeleteResult>;
}
