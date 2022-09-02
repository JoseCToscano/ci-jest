import {MigrationInterface, QueryRunner} from "typeorm";

export class PaymentOptionsMerchantId1638289311472 implements MigrationInterface {
    name = 'PaymentOptionsMerchantId1638289311472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE paymentOptions ADD merchantId int NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE storeId storeId int NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions ADD CONSTRAINT FK_1ffe8e5251cd80973b2d1f3e355 FOREIGN KEY (merchantId) REFERENCES comercios(idComercio) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE paymentOptions DROP FOREIGN KEY FK_1ffe8e5251cd80973b2d1f3e355`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE storeId storeId int NOT NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions DROP COLUMN merchantId`);
    }

}
