import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferIsMerchantChange1639071115667 implements MigrationInterface {
    name = 'OfferIsMerchantChange1639071115667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD firstPaymentMonthShift int NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE offers ADD isChangeInMerchant tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offers DROP COLUMN isChangeInMerchant`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN firstPaymentMonthShift`);
    }

}
