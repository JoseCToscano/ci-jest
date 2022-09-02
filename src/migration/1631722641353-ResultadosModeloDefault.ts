import {MigrationInterface, QueryRunner} from "typeorm";

export class ResultadosModeloDefault1631722641353 implements MigrationInterface {
    name = 'ResultadosModeloDefault1631722641353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE resultadosModeloDefault (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, version varchar(60) NULL, score double NULL, thVentanaSuperior float NULL, thVentanaInferior float NULL, decision varchar(25) NULL, UNIQUE INDEX IDX_fb355c47b49ea7f6d741c6ad4d (idSolicitud), UNIQUE INDEX REL_fb355c47b49ea7f6d741c6ad4d (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE resultadosModeloDefault ADD CONSTRAINT FK_fb355c47b49ea7f6d741c6ad4d6 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE resultadosModeloDefault DROP FOREIGN KEY FK_fb355c47b49ea7f6d741c6ad4d6`);
        await queryRunner.query(`DROP INDEX REL_fb355c47b49ea7f6d741c6ad4d ON resultadosModeloDefault`);
        await queryRunner.query(`DROP INDEX IDX_fb355c47b49ea7f6d741c6ad4d ON resultadosModeloDefault`);
        await queryRunner.query(`DROP TABLE resultadosModeloDefault`);
    }

}
