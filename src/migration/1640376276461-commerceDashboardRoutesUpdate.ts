import { MigrationInterface, QueryRunner } from 'typeorm';

export class commerceDashboardRoutesUpdate1640376276461
	implements MigrationInterface
{
	name = 'commerceDashboardRoutesUpdate1640376276461';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/stores/getStoresFromMerchan', 'GET'), ('/v3/admin/merchants/updateMerchant', 'POST'), ('/v3/admin/paymentOptions/updatePaymentOption', 'POST'), ('/v3/admin/stores/updateStore', 'POST'), ('/v3/admin/merchants/validateMerchant', 'POST'), ('/v3/admin/stores/validateStore', 'POST'), ('/v3/admin/paymentOptions/validPaymentOption', 'POST');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/stores/getStoresFromMerchan', '/v3/admin/merchants/updateMerchant', '/v3/admin/paymentOptions/updatePaymentOption', '/v3/admin/stores/updateStore', '/v3/admin/merchants/validateMerchant', '/v3/admin/stores/validateStore', '/v3/admin/paymentOptions/validPaymentOption');`
		);
	}
}
