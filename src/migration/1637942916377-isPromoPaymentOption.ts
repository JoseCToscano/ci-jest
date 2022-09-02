import {MigrationInterface, QueryRunner} from "typeorm";

export class isPromoPaymentOption1637942916377 implements MigrationInterface {
    name = 'isPromoPaymentOption1637942916377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`paymentOptions\` ADD \`isPromo\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`paymentOptions\` DROP COLUMN \`isPromo\``);
    }
}
