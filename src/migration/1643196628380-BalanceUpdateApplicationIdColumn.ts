import {MigrationInterface, QueryRunner} from "typeorm";

export class BalanceUpdateApplicationIdColumn1643196628380 implements MigrationInterface {
    name = 'BalanceUpdateApplicationIdColumn1643196628380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE balanceUpdates ADD applicationId int NULL`);
        await queryRunner.query(`ALTER TABLE balanceUpdates ADD CONSTRAINT FK_c73e64caa9a1a4bb4dc93adcb3c FOREIGN KEY (applicationId) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE balanceUpdates DROP FOREIGN KEY FK_c73e64caa9a1a4bb4dc93adcb3c`);
        await queryRunner.query(`ALTER TABLE balanceUpdates DROP COLUMN applicationId`);
    }

}
