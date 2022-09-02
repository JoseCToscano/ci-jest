import {MigrationInterface, QueryRunner} from "typeorm";

export class NewStatusDocsAprobados1641863278051 implements MigrationInterface {
    name = 'NewStatusDocsAprobados1641863278051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (27, 'Documentos aprobados', 1, 0, 'Los documentos fueron aprobados');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM staticEstadosSolicitudes WHERE staticEstadosSolicitudes.idEstadoSolicitud IN (27);`);
    }

}
