import {MigrationInterface, QueryRunner} from "typeorm";

export class PaymentOptionCommissionsRecords1639587789288 implements MigrationInterface {
    name = 'PaymentOptionCommissionsRecords1639587789288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE paymentOptionsCommissionRecords (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, paymentOptionId int NOT NULL, previousCommission int NOT NULL, nextCommission int NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE paymentOptionsCommissionRecords ADD CONSTRAINT FK_a081bb3582b074d26d58233bf97 FOREIGN KEY (paymentOptionId) REFERENCES paymentOptions(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE paymentOptionsCommissionRecords DROP FOREIGN KEY FK_a081bb3582b074d26d58233bf97`);
        await queryRunner.query(`DROP TABLE paymentOptionsCommissionRecords`);
    }

}
