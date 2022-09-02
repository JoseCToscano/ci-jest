import { MigrationInterface, QueryRunner } from 'typeorm';

export class CobranzaRouteBulkDeactivate1654018295060
	implements MigrationInterface
{
	name = 'CobranzaRouteBulkDeactivate1654018295060';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/cobranza/deactivate-bulk', 'POST');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/cobranza/deactivate-bulk';`
		);
	}
}
