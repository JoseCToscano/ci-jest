import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRoutesForSuperPayments1654884570325
	implements MigrationInterface
{
	name = 'addRoutesForSuperPayments1654884570325';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/pagos/usersV3', 'GET'), 
                                                    ('/v3/admin/pagos/credits', 'GET'), 
                                                    ('/v3/admin/pagos/addPaymentUserV3', 'POST');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('v3/admin/pagos/usersV3', 
															'/v3/admin/pagos/credits', 
															'/v3/admin/pagos/addPaymentUserV3');`
		);
	}
}
