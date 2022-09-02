import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferedPaymentOptions1637849047839 implements MigrationInterface {
    name = 'OfferedPaymentOptions1637849047839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE offeredPaymentOptions (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, numberOfPayments int NOT NULL, minAmount double NOT NULL, maxAmount double NOT NULL, interestRate double NOT NULL, discountPercentage double NOT NULL DEFAULT 0, merchantCommission double NOT NULL DEFAULT 0, firstPaymentDate date NOT NULL, storeId int NOT NULL, merchantId int NOT NULL, type varchar(50) NOT NULL DEFAULT 'BNPL', adminSenderId int NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE paymentOptions RENAME COLUMN discountPecentage TO discountPercentage`);
        await queryRunner.query(`ALTER TABLE paymentOptions RENAME COLUMN term TO numberOfPayments`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE merchantCommission merchantCommission double NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE firstPaymentMonthShift firstPaymentMonthShift int NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_14a82ccca3a82312af8676c77f2 FOREIGN KEY (storeId) REFERENCES sucursales(idSucursal) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_a3c14ca8201254ea115e9749da7 FOREIGN KEY (merchantId) REFERENCES comercios(idComercio) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_9d8d8bb09f80269cbff09195f21 FOREIGN KEY (adminSenderId) REFERENCES adminsV3(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_9d8d8bb09f80269cbff09195f21`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_a3c14ca8201254ea115e9749da7`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_14a82ccca3a82312af8676c77f2`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE firstPaymentMonthShift firstPaymentMonthShift int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE merchantCommission merchantCommission double NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE paymentOptions RENAME COLUMN discountPercentage TO discountPecentage`);
        await queryRunner.query(`ALTER TABLE paymentOptions RENAME COLUMN numberOfPayments TO term`);
        await queryRunner.query(`DROP TABLE offeredPaymentOptions`);
    }

}
