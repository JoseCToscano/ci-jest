import {MigrationInterface, QueryRunner} from "typeorm";

export class ResultadosModelos1631102393573 implements MigrationInterface {
    name = 'ResultadosModelos1631102393573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE resultadosNorma (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, isRejected tinyint NOT NULL, reason text NULL, UNIQUE INDEX IDX_10a0ce865adadd1649abeea777 (idSolicitud), UNIQUE INDEX REL_10a0ce865adadd1649abeea777 (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE resultadosKarla (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, isApproved tinyint NOT NULL, reason text NULL, UNIQUE INDEX IDX_294182e5d9386b11b5ae267023 (idSolicitud), UNIQUE INDEX REL_294182e5d9386b11b5ae267023 (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE resultadosModeloPreAprobacion (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, version varchar(60) NULL, score double NULL, thVentanaSuperior float NULL, thVentanaInferior float NULL, decision varchar(25) NULL, UNIQUE INDEX IDX_7c31214ed82c230da0c6bf003e (idSolicitud), UNIQUE INDEX REL_7c31214ed82c230da0c6bf003e (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE resultadosNorma ADD CONSTRAINT FK_10a0ce865adadd1649abeea7773 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE resultadosKarla ADD CONSTRAINT FK_294182e5d9386b11b5ae2670235 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE resultadosModeloPreAprobacion ADD CONSTRAINT FK_7c31214ed82c230da0c6bf003ea FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE resultadosModeloPreAprobacion DROP FOREIGN KEY FK_7c31214ed82c230da0c6bf003ea`);
        await queryRunner.query(`ALTER TABLE resultadosKarla DROP FOREIGN KEY FK_294182e5d9386b11b5ae2670235`);
        await queryRunner.query(`ALTER TABLE resultadosNorma DROP FOREIGN KEY FK_10a0ce865adadd1649abeea7773`);
        await queryRunner.query(`DROP INDEX REL_7c31214ed82c230da0c6bf003e ON resultadosModeloPreAprobacion`);
        await queryRunner.query(`DROP INDEX IDX_7c31214ed82c230da0c6bf003e ON resultadosModeloPreAprobacion`);
        await queryRunner.query(`DROP TABLE resultadosModeloPreAprobacion`);
        await queryRunner.query(`DROP INDEX REL_294182e5d9386b11b5ae267023 ON resultadosKarla`);
        await queryRunner.query(`DROP INDEX IDX_294182e5d9386b11b5ae267023 ON resultadosKarla`);
        await queryRunner.query(`DROP TABLE resultadosKarla`);
        await queryRunner.query(`DROP INDEX REL_10a0ce865adadd1649abeea777 ON resultadosNorma`);
        await queryRunner.query(`DROP INDEX IDX_10a0ce865adadd1649abeea777 ON resultadosNorma`);
        await queryRunner.query(`DROP TABLE resultadosNorma`);
    }
}