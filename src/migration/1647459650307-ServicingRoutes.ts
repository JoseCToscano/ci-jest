import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServicingRoutes1647459650307 implements MigrationInterface {
	name = 'ServicingRoutes1647459650307';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/servicing/detailedInstallments', 'GET'),('/v3/admin/creditos/servicing/simulateActions', 'POST'),('/v3/admin/creditos/servicing/payments', 'GET'),('/v3/admin/creditos/servicing/transactions', 'GET'),('/v3/admin/creditos/servicing/history', 'GET'),('/v3/admin/creditos/servicing/transactionTypes', 'GET'), ('/v3/admin/creditos/servicing/confirmActions', 'POST');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/servicing/detailedInstallments','/v3/admin/creditos/servicing/payments','/v3/admin/creditos/servicing/simulateActions','/v3/admin/creditos/servicing/transactions','/v3/admin/creditos/servicing/history','/v3/admin/creditos/servicing/transactionTypes','/v3/admin/creditos/servicing/confirmActions');`
		);
	}
}
