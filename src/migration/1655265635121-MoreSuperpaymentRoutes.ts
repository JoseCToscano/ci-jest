import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoreSuperpaymentRoutes1655265635121 implements MigrationInterface {
	name = 'MoreSuperpaymentRoutes1655265635121';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/pagos/userV3Payments', 'GET'), 
                                                    ('/v3/admin/pagos/editUserV3Payment', 'POST'), 
                                                    ('/v3/admin/pagos/reconcileUserV3Payment', 'POST'),
                                                    ('/v3/admin/pagos/deleteUserV3Payment', 'POST'),
                                                    ('/v3/admin/pagos/deleteReconciledUserV3Payments', 'POST');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta IN ('v3/admin/pagos/userV3Payments', 
															'/v3/admin/pagos/editUserV3Payment', 
															'/v3/admin/pagos/reconcileUserV3Payment',
															'/v3/admin/pagos/deleteUserV3Payment',
															'/v3/admin/pagos/deleteReconciledUserV3Payments');`
		);
	}
}
