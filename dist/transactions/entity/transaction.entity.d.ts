import { TransactionAction } from '../types/transaction.types';
import { UserBalance } from '../../user-balance/entity/user-balance.entity';
export declare class UserTransaction {
    id: string;
    userId: number;
    userBalance: UserBalance;
    action: TransactionAction;
    amount: number;
    createdAt: Date;
}
