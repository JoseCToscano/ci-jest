import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPaymentOptionsRoute1649437607103 implements MigrationInterface {
	name = 'AddPaymentOptionsRoute1649437607103';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/paymentOptions/addPaymentOptions', 'POST');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/paymentOptions/addPaymentOptions');`
		);
	}
}
