import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRoutesRefirmaRequestsForAdmin1650903732053
	implements MigrationInterface
{
	name = 'addRoutesRefirmaRequestsForAdmin1650903732053';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/refirma/searches', 'GET'), 
                                                    ('/v3/admin/creditos/refirma/requests', 'GET'), 
                                                    ('/v3/admin/creditos/refirma/rejections', 'DELETE'), 
                                                    ('/v3/admin/creditos/refirma/automatic', 'POST');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/refirma/searches', 
																										'/v3/admin/creditos/refirma/requests', 
																										'/v3/admin/creditos/refirma/rejections', 
																										'/v3/admin/creditos/refirma/automatic');`
		);
	}
}
