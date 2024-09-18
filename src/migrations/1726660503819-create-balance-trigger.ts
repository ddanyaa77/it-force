import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1726660503819 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE OR REPLACE FUNCTION update_user_balance() RETURNS TRIGGER AS
$$
DECLARE
  current_balance INTEGER;
BEGIN
  SELECT "balance" INTO current_balance
  FROM user_balances
  WHERE "userId" = NEW."userId"
  FOR UPDATE; --Explicit lock to avoid lost updates

  IF NEW."action" = 'DEDUCTION' THEN
    UPDATE user_balances
    SET "balance" = current_balance - NEW."amount"
    WHERE "userId" = NEW."userId";
  ELSIF NEW."action" = 'REPLENISHMENT' THEN
    UPDATE user_balances
    SET "balance" = current_balance + NEW."amount"
    WHERE "userId" = NEW."userId";
  END IF;

  RETURN NEW;
END;
$$
LANGUAGE plpgsql;`);

    await queryRunner.query(`
CREATE TRIGGER update_user_balance_trigger
AFTER INSERT ON transactions
FOR EACH ROW
EXECUTE FUNCTION update_user_balance();
`);

    await queryRunner.query(`CREATE OR REPLACE FUNCTION revert_user_balance() RETURNS TRIGGER AS
$$
DECLARE
  current_balance INTEGER;
BEGIN
  SELECT "balance" INTO current_balance
  FROM user_balances
  WHERE "userId" = OLD."userId"
  FOR UPDATE; --Explicit lock to avoid lost updates

  IF OLD."action" = 'DEDUCTION' THEN
    UPDATE user_balances
    SET "balance" = current_balance + OLD."amount"
    WHERE "userId" = OLD."userId";
  ELSIF OLD."action" = 'REPLENISHMENT' THEN
    UPDATE user_balances
    SET "balance" = current_balance - OLD."amount"
    WHERE "userId" = OLD."userId";
  END IF;

  RETURN OLD;
END;
$$
LANGUAGE plpgsql;`);

    await queryRunner.query(`
CREATE TRIGGER revert_user_balance_trigger
AFTER DELETE ON transactions
FOR EACH ROW
EXECUTE FUNCTION revert_user_balance();
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TRIGGER IF EXISTS revert_user_balance_trigger ON transactions;`,
    );
    await queryRunner.query(`DROP FUNCTION IF EXISTS revert_user_balance();`);

    await queryRunner.query(
      `DROP TRIGGER IF EXISTS update_user_balance_trigger ON transactions;`,
    );
    await queryRunner.query(`DROP FUNCTION IF EXISTS update_user_balance();`);
  }
}
