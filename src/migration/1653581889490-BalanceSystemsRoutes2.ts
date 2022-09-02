import { MigrationInterface, QueryRunner } from 'typeorm';

export class BalanceSystemsRoutes21653581889490 implements MigrationInterface {
	name = 'BalanceSystemsRoutes21653581889490';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/balance-systems/update', 'POST');`
			);
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/balance-systems/validate', 'POST');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/tesoreria/balance-systems/update';`
		);
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/tesoreria/balance-systems/validate';`
		);
	}
}
