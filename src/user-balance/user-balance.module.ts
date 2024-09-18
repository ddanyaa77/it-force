import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBalance } from './entity/user-balance.entity';
import { UserBalanceRepository } from './user-balance.repository';
import { UserBalanceService } from './user-balance.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserBalance])],
  providers: [UserBalanceRepository, UserBalanceService],
  exports: [UserBalanceService],
})
export class UserBalanceModule {}
