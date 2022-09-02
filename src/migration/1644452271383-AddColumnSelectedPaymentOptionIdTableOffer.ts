import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnSelectedPaymentOptionIdTableOffer1644452271383 implements MigrationInterface {
    name = 'AddColumnSelectedPaymentOptionIdTableOffer1644452271383'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` ADD \`selectedPaymentOptionId\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` DROP COLUMN \`selectedPaymentOptionId\``);
    }

}
