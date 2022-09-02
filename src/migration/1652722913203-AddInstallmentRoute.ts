import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddInstallmentRoute1652722913203 implements MigrationInterface {
	name = 'AddInstallmentRoute1652722913203';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/servicing/addInstallment', 'POST'),('/v3/admin/creditos/servicing/statusRecords', 'GET');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/creditos/servicing/addInstallment';`
		);
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/creditos/servicing/statusRecords';`
		);
	}
}
