import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserBalanceRepository } from './user-balance.repository';
import { TransactionAction } from '../transactions/types/transaction.types';

@Injectable()
export class UserBalanceService {
  // Типа кэш, рэдис лень было завозить, надеюсь понимаете...
  private userBalancesCache: Map<number, number> = new Map<number, number>();

  constructor(private readonly userBalanceRepository: UserBalanceRepository) {}

  async getUserBalance(userId: number): Promise<number> {
    if (this.userBalancesCache.has(userId)) {
      return this.userBalancesCache.get(userId) as number;
    }

    try {
      const { balance } =
        await this.userBalanceRepository.findOneOrFail(userId);

      this.userBalancesCache.set(userId, balance);

      return balance;
    } catch (e) {
      throw new NotFoundException('User balance with such id does not exist.');
    }
  }

  updateUserBalanceCache(
    userId: number,
    action: TransactionAction,
    amount: number,
  ): void {
    const currentBalance = this.userBalancesCache.get(userId);
    if (!currentBalance)
      throw new InternalServerErrorException(
        'Could not update user balance cache.',
      );

    const newBalance =
      action === TransactionAction.REPLENISHMENT
        ? currentBalance + amount
        : currentBalance - amount;
    this.userBalancesCache.set(userId, newBalance);
  }
}
