import {MigrationInterface, QueryRunner} from "typeorm";

export class NewFormStatus1640375180035 implements MigrationInterface {
	name = 'NewFormStatus1640375180035'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (20, 'Solicitud iniciada', 1, 0, 'La solicitud fue creada');`);
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (21, 'Formulario paso 1', 1, 0, 'El usuario subió el primer paso del formulario');`);
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (22, 'Formulario paso 2', 1, 0, 'El usuario subió el segundo paso del formulario');`);
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (23, 'Formulario paso 3', 1, 0, 'El usuario subió el tercer paso del formulario');`);
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (24, 'Formulario paso 4', 1, 0, 'El usuario subió el cuarto paso del formulario');`);
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (25, 'Formulario paso 5', 1, 0, 'El usuario subió el quinto paso del formulario');`);
		await queryRunner.query(`INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (26, 'Formulario terminado', 1, 0, 'Se validaron todos los pasos del formulario exitosamente');`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM staticEstadosSolicitudes WHERE staticEstadosSolicitudes.idEstadoSolicitud IN (20,21,22,23,24,25,26);`);
	}

}
