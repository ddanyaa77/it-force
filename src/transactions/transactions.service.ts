import { Injectable } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/create-transaction.dto';
import {
  CompensateTransactionResponse,
  CreateTransactionResponse,
} from './types/transaction.types';
import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
  ) {}
  async create(
    transaction: CreateTransactionReqDto,
  ): Promise<CreateTransactionResponse> {
    // Idempotency check
    const existingTransaction = await this.transactionsRepository.findOne(
      transaction.id,
    );

    if (!existingTransaction) {
      await this.transactionsRepository.create(transaction);
    }

    return { success: true };
  }

  async compensate(id: string): Promise<CompensateTransactionResponse> {
    await this.transactionsRepository.deleteOne(id);
    return { success: true };
  }
}
