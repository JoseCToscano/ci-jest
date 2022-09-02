import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChargeNextInstallmentRoute1652978175017
	implements MigrationInterface
{
	name = 'ChargeNextInstallmentRoute1652978175017';

	public async up(queryRunner: QueryRunner): Promise<void> {
		if (process.env.NODE_ENV !== 'test') {
			await queryRunner.query(
				`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/servicing/chargeNextInstallment', 'POST');`
			);
		}
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/creditos/servicing/chargeNextInstallment';`
		);
	}
}
