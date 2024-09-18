import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateTransactionReqDto } from './dto/create-transaction.dto';
import { UserTransaction } from './entity/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionsRepository {
  constructor(
    @InjectRepository(UserTransaction)
    private readonly transactionsRepo: Repository<UserTransaction>,
    private readonly dataSource: DataSource,
  ) {}

  async create(transaction: CreateTransactionReqDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('REPEATABLE READ');
    const repo =
      queryRunner.manager.getRepository<UserTransaction>(UserTransaction);

    try {
      const userTransaction = repo.create(transaction);
      await repo.save(userTransaction);
      await queryRunner.commitTransaction();

      return;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    } finally {
      await queryRunner.release();
    }
  }

  findOne(transactionId: string) {
    return this.transactionsRepo.findOne({ where: { id: transactionId } });
  }

  deleteOne(transactionId: string) {
    return this.transactionsRepo.delete({ id: transactionId });
  }
}
