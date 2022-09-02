import {MigrationInterface, QueryRunner} from "typeorm";

export class BalanceUpdateIsOverwrittenCol1635443823801 implements MigrationInterface {
    name = 'BalanceUpdateIsOverwrittenCol1635443823801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD \`isOverwritten\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP COLUMN \`isOverwritten\``);
    }

}
