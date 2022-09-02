import { MigrationInterface, QueryRunner } from 'typeorm';

export class commerceDashboardsIndustry1640622600272
	implements MigrationInterface
{
	name = 'commerceDashboardsIndustry1640622600272';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/merchants/getMerchantIndustries', 'GET'), ('/v3/admin/merchants/getMerchantCategory', 'GET'), ('/v3/admin/merchants/getAllMerchants', 'GET') ;`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/merchants/getMerchantIndustries', '/v3/admin/merchants/getMerchantCategory', , '/v3/admin/merchants/getAllMerchants');`
		);
	}
}
