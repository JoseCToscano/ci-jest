import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferedPaymentOptionsSolicitud1637850551525 implements MigrationInterface {
    name = 'OfferedPaymentOptionsSolicitud1637850551525'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD idSolicitud int NOT NULL`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions ADD CONSTRAINT FK_5657adb110356a0e48e52b61a45 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP FOREIGN KEY FK_5657adb110356a0e48e52b61a45`);
        await queryRunner.query(`ALTER TABLE offeredPaymentOptions DROP COLUMN idSolicitud`);
    }

}
