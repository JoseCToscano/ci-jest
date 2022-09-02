import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferOfferPaymentOptionsEdit1638896421938 implements MigrationInterface {
    name = 'OfferOfferPaymentOptionsEdit1638896421938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_14a82ccca3a82312af8676c77f2`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_5657adb110356a0e48e52b61a45`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_9d8d8bb09f80269cbff09195f21`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_a3c14ca8201254ea115e9749da7`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_edbed7f89407efa6c50b0611506`);
        await queryRunner.query(`CREATE TABLE offers (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, minAmount double NOT NULL, maxAmount double NOT NULL, defaultAmount double NOT NULL, idSolicitud int NOT NULL, storeId int NOT NULL, merchantId int NOT NULL, adminSenderId int NOT NULL, creditOwnerId int NOT NULL, loanType int NOT NULL, isCustomerSelection tinyint NOT NULL DEFAULT 0, isReSignature tinyint NOT NULL DEFAULT 0, PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN minAmount`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN maxAmount`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN storeId`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN merchantId`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN adminSenderId`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN idSolicitud`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN creditOwnerId`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD offerId int NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_a6259966744272bfdcafdc562c5 FOREIGN KEY (offerId) REFERENCES offers(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offers ADD CONSTRAINT FK_f3250428cbb9729133e092150bb FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offers ADD CONSTRAINT FK_22f5c1e69d5ba4dc2ebe4d268d1 FOREIGN KEY (storeId) REFERENCES sucursales(idSucursal) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offers ADD CONSTRAINT FK_6eafb53332e67989342b71e244c FOREIGN KEY (merchantId) REFERENCES comercios(idComercio) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offers ADD CONSTRAINT FK_ce5176fc77613ba80d2b1cff054 FOREIGN KEY (adminSenderId) REFERENCES adminsV3(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offers ADD CONSTRAINT FK_2517c433bd0690906ecd3f59a0e FOREIGN KEY (creditOwnerId) REFERENCES creditOwners(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN offerId`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD creditOwnerId int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD idSolicitud int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD adminSenderId int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD merchantId int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD storeId int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD maxAmount double NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD minAmount double NOT NULL`);
        await queryRunner.query(`DROP TABLE offers`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_edbed7f89407efa6c50b0611506 FOREIGN KEY (creditOwnerId) REFERENCES creditOwners(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_a3c14ca8201254ea115e9749da7 FOREIGN KEY (merchantId) REFERENCES comercios(idComercio) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_9d8d8bb09f80269cbff09195f21 FOREIGN KEY (adminSenderId) REFERENCES adminsV3(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_5657adb110356a0e48e52b61a45 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_14a82ccca3a82312af8676c77f2 FOREIGN KEY (storeId) REFERENCES sucursales(idSucursal) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
