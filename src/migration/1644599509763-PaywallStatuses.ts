import { MigrationInterface, QueryRunner } from 'typeorm';

export class PaywallStatuses1644599509763 implements MigrationInterface {
	name = 'PaywallStatuses1644599509763'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (28, 'Esperando Enganche', 1, 0, 'El usuario firmó su contrato pero estamos esperando el pago de su enganche para autorizar el crédito'), (29, 'Crédito Autorizado', 1, 0, 'El crédito pasó por todas las etapas de la firma, está activo y autorizado');`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM staticEstadosSolicitudes WHERE staticEstadosSolicitudes.idEstadoSolicitud IN (28, 29);`);
	}

}
