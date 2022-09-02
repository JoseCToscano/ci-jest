import {MigrationInterface, QueryRunner} from "typeorm";

export class PaymentOptions1637699062259 implements MigrationInterface {
    name = 'PaymentOptions1637699062259'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE TABLE paymentOptions (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, term int NOT NULL, uIInterestRate double NOT NULL, a0InterestRate double NOT NULL, a1InterestRate double NOT NULL, a2InterestRate double NOT NULL, a3InterestRate double NOT NULL, b1InterestRate double NOT NULL, b2InterestRate double NOT NULL, b3InterestRate double NOT NULL, c1InterestRate double NOT NULL, c2InterestRate double NOT NULL, c3InterestRate double NOT NULL, discountPecentage double NOT NULL DEFAULT 0, merchantCommission double NOT NULL DEFAULT 0, firstPaymentMonthShift int NOT NULL DEFAULT 0, startingTime datetime(0) NOT NULL, endingTime datetime(0) NOT NULL, priority int NOT NULL, storeId int NOT NULL, identifierCode varchar(100) NULL, minAmount double NOT NULL, maxAmount double NOT NULL, type varchar(50) NOT NULL DEFAULT 'BNPL', PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE paymentOptions ADD CONSTRAINT FK_863b69d5a818ac4d89dcd1b3e60 FOREIGN KEY (storeId) REFERENCES sucursales(idSucursal) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE paymentOptions DROP FOREIGN KEY FK_863b69d5a818ac4d89dcd1b3e60`);
        await queryRunner.query(`DROP TABLE paymentOptions`);
    }

}
