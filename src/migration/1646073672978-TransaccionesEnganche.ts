import {MigrationInterface, QueryRunner} from "typeorm";

export class TransaccionesEnganche1646073672978 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`INSERT INTO tiposMovimientos(id, clave, descripcion) VALUES (6, 'Abono enganche', 'Se resta del saldo insoluto el monto del enganche');`);
		await queryRunner.query(`INSERT INTO tiposTransacciones(id, clave, descripcion, tipoMovimientoId) VALUES (15, 'Transacción inicial enganche', 'Transacción para restar del saldo insulto el monto de enganche', 6), (16, 'Cargo Deuda Enganche', 'Transacción para inicializar la deuda del enganche a pagar', 1), (17, 'Pago Enganche', 'Transacción de pago de enganche', 2);`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DELETE FROM tiposTransacciones where id IN (15, 16, 17);`)
		await queryRunner.query(`DELETE FROM tiposMovimientos where id IN (6);`)
	}
}
