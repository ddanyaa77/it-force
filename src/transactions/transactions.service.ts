import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/create-transaction.dto';
import {
  CompensateTransactionResponse,
  CreateTransactionResponse,
  TransactionAction,
} from './types/transaction.types';
import { TransactionsRepository } from './transactions.repository';
import { UserBalanceService } from '../user-balance/user-balance.service';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly userBalanceService: UserBalanceService,
  ) {}
  async create({
    id,
    userId,
    action,
    amount,
  }: CreateTransactionReqDto): Promise<CreateTransactionResponse> {
    // Idempotency check
    const existingTransaction = await this.transactionsRepository.findOne(id);

    if (!existingTransaction) {
      if (action === TransactionAction.DEDUCTION) {
        await this.checkUserBalance(userId, amount);
      }

      await this.transactionsRepository.create({ id, userId, action, amount });

      this.userBalanceService.updateUserBalanceCache(userId, action, amount);
    }

    return { success: true };
  }

  private async checkUserBalance(
    userId: number,
    amount: number,
  ): Promise<void> {
    const userBalance = await this.userBalanceService.getUserBalance(userId);
    if (userBalance < amount) {
      throw new UnprocessableEntityException('Insufficient balance.');
    }
  }

  async compensate(id: string): Promise<CompensateTransactionResponse> {
    await this.transactionsRepository.deleteOne(id);
    return { success: true };
  }
}
