import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { TransactionsRepository } from './transactions.repository';
import { UserTransaction } from './entity/transaction.entity';
import { UserBalanceModule } from '../user-balance/user-balance.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserTransaction]), UserBalanceModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsRepository],
})
export class TransactionsModule {}
