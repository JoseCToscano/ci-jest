import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateRouteToAddPaymentOptions1651693386130
	implements MigrationInterface
{
	name = 'UpdateRouteToAddPaymentOptions1651693386130';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`UPDATE rutas SET ruta ="/v3/admin/paymentOptions", metodo="PUT" WHERE rutas.ruta ="/v3/admin/paymentOptions/addPaymentOptions"`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`UPDATE rutas SET ruta ="/v3/admin/paymentOptions/addPaymentOptions", metodo="POST" WHERE rutas.ruta ="/v3/admin/paymentOptions"`
		);
	}
}
