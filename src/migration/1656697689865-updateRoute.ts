import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateRoute1656697689865 implements MigrationInterface {
	name = 'updateRoute1656697689865';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/iam/updateRoute', 'POST')`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/iam/updateRoute');`
		);
	}
}
