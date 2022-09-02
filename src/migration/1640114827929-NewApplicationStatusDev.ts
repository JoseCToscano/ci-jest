import {MigrationInterface, QueryRunner} from "typeorm";

export class NewApplicationStatusDev1640114827929 implements MigrationInterface {
    name = 'NewApplicationStatusDev1640114827929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (16, 'Esperando Info Adicional', 1, 0, 'Este estado sucede cuando se requiere info extra del solicitante');`);
        await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (17, 'En Disputa', 1, 0, 'Cuando el comercio o solicitante tiene alguna queja y el proceso está avanzado ya, entra en disputa');`);
        await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (18, 'Compra Confirmada', 1, 0, 'Partners marcan que el producto o la compra ya fue entregado de su lado');`);
        await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (19, 'Desembolsado', 1, 0, 'Dinero fue desembolsado por parte de Atrato hacia merchant');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM staticEstadosSolicitudes WHERE staticEstadosSolicitudes.idEstadoSolicitud IN (15,16,17,18,19);`);
    }

}
