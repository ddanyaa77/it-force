import {
  CreateTransactionRequest,
  TransactionAction,
} from '../types/transaction.types';
import { IsEnum, IsInt, IsUUID, Min } from 'class-validator';

export class CreateTransactionReqDto implements CreateTransactionRequest {
  @IsUUID()
  id: string;

  @Min(0)
  @IsInt()
  userId: number;

  @IsEnum(TransactionAction)
  action: TransactionAction;

  @Min(0)
  @IsInt()
  amount: number;
}
