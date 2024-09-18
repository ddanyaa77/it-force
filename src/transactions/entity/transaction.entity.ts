import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TransactionAction } from '../types/transaction.types';
import { UserBalance } from '../../user-balance/entity/user-balance.entity';

@Entity({ name: 'transactions' })
export class UserTransaction {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column()
  userId: number;

  @ManyToOne(() => UserBalance)
  @JoinColumn({ name: 'userId' })
  userBalance: UserBalance;

  @Column({ type: 'enum', enum: TransactionAction })
  action: TransactionAction;

  @Column({ type: 'integer' })
  amount: number;

  @CreateDateColumn()
  createdAt: Date;
}
