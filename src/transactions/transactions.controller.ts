import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import {
  CompensateTransactionAddress,
  CreateTransactionAddress,
  CreateTransactionResponse,
} from './types/transaction.types';
import { TransactionsService } from './transactions.service';
import { CreateTransactionReqDto } from './dto/create-transaction.dto';

@Controller()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post(CreateTransactionAddress)
  createTransaction(
    @Body() body: CreateTransactionReqDto,
  ): Promise<CreateTransactionResponse> {
    return this.transactionsService.create(body);
  }

  @Delete(CompensateTransactionAddress)
  compensateTransaction(@Param('id') id: string) {
    return this.transactionsService.compensate(id);
  }
}
