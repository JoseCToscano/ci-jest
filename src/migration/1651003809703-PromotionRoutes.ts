import { MigrationInterface, QueryRunner } from 'typeorm';

export class PromotionRoutes1651003809703 implements MigrationInterface {
	name = 'PromotionRoutes1651003809703';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/promotions/', 'GET');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/promotions/';`
		);
	}
}
