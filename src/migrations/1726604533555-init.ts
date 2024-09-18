import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1726604533555 implements MigrationInterface {
  name = 'Migration1726604533555';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_balances" ("userId" integer NOT NULL, "balance" integer NOT NULL, CONSTRAINT "CHK_1ca10230cb2c271d3b999465c8" CHECK ("balance" >= 0), CONSTRAINT "PK_fc961fea2e90ea93847e43f7b4e" PRIMARY KEY ("userId"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."transactions_action_enum" AS ENUM('DEDUCTION', 'REPLENISHMENT')`,
    );
    await queryRunner.query(
      `CREATE TABLE "transactions" ("id" uuid NOT NULL, "userId" integer NOT NULL, "action" "public"."transactions_action_enum" NOT NULL, "amount" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "transactions" ADD CONSTRAINT "FK_6bb58f2b6e30cb51a6504599f41" FOREIGN KEY ("userId") REFERENCES "user_balances"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "transactions" DROP CONSTRAINT "FK_6bb58f2b6e30cb51a6504599f41"`,
    );
    await queryRunner.query(`DROP TABLE "transactions"`);
    await queryRunner.query(`DROP TYPE "public"."transactions_action_enum"`);
    await queryRunner.query(`DROP TABLE "user_balances"`);
  }
}
