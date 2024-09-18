import { Check, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_balances' })
export class UserBalance {
  @PrimaryColumn()
  userId: number;

  @Check('"balance" >= 0')
  @Column({ type: 'integer' })
  balance: number;
}
