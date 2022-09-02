import { MigrationInterface, QueryRunner } from 'typeorm';

export class CRMApplicationsRoutes1654633491218 implements MigrationInterface {
	name = 'CRMApplicationsRoutes1654633491218';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/crm/applications', 'POST'),('/v3/admin/crm/applications/filter-options', 'GET');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN('/v3/admin/crm/applications','/v3/admin/crm/applications/filter-options');`
		);
	}
}
