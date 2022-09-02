import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferedPaymentOptionsIsPromoCreditOwnerId1638643293000 implements MigrationInterface {
    name = 'OfferedPaymentOptionsIsPromoCreditOwnerId1638643293000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD isPromo tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD creditOwnerId int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_edbed7f89407efa6c50b0611506 FOREIGN KEY (creditOwnerId) REFERENCES creditOwners(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_edbed7f89407efa6c50b0611506`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN creditOwnerId`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN isPromo`);
    }

}
