import { MigrationInterface, QueryRunner } from 'typeorm';

export class StoresByMerchantIdsRoute1654810788398
	implements MigrationInterface
{
	name = 'StoresByMerchantIdsRoute1654810788398';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/stores', 'GET');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/stores';`
		);
	}
}
