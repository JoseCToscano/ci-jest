import { MigrationInterface, QueryRunner } from 'typeorm';

export class TransactionTypeDiscount1650490803615
	implements MigrationInterface
{
	name = 'TransactionTypeDiscount1650490803615';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO \`tiposMovimientos\` (\`id\`,\`clave\`, \`descripcion\`) VALUES (7,'Ajuste capital', 'Ajuste al capital de un préstamo')`
		);
		await queryRunner.query(
			`INSERT INTO \`tiposTransacciones\` (\`id\`,\`clave\`, \`descripcion\`, \`tipoMovimientoId\`) VALUES (18,'Descuento', 'Transacción de descuento sobe el préstamo',7)`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM tiposTransacciones WHERE clave="Descuento"`
		);
		await queryRunner.query(
			`DELETE FROM tiposMovimientos WHERE clave="Ajuste capital"`
		);
	}
}
