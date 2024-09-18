import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBalance } from './entity/user-balance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBalanceRepository {
  constructor(
    @InjectRepository(UserBalance)
    private readonly userBalanceRepo: Repository<UserBalance>,
  ) {}
  findOneOrFail(userId: number): Promise<UserBalance> {
    return this.userBalanceRepo.findOneOrFail({
      where: { userId },
    });
  }
}
