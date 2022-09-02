import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRoutesForStandardRates1653508626170
	implements MigrationInterface
{
	name = 'addRoutesForStandardRates1653508626170';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/paymentOptions/standard-rates/searches', 'GET'), 
                                                    ('/v3/admin/paymentOptions/standard-rates', 'GET'), 
                                                    ('/v3/admin/paymentOptions/standard-rates/update', 'PUT');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/paymentOptions/standard-rates/searches', 
																										'/v3/admin/paymentOptions/standard-rates', 
																										'/v3/admin/paymentOptions/standard-rates/update');`
		);
	}
}
