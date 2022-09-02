import { MigrationInterface, QueryRunner } from 'typeorm';

export class CancelledStatus1643219308485 implements MigrationInterface {
	name = 'CancelledStatus1643219308485'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`INSERT IGNORE INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (15, 'Cancelado', 1, 0, 'La solicitud fue cancelada manualmente');`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM staticEstadosSolicitudes WHERE staticEstadosSolicitudes.idEstadoSolicitud IN (15);`);
	}

}
