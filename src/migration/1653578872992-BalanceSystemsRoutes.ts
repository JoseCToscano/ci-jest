import { MigrationInterface, QueryRunner } from 'typeorm';

export class BalanceSystemsRoutes1653578872992 implements MigrationInterface {
	name = 'BalanceSystemsRoutes1653578872992';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/balance-systems', 'GET');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/tesoreria/balance-systems';`
		);
	}
}
