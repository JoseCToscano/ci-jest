import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialDebtCharge1651685921227 implements MigrationInterface {
	name = 'InitialDebtCharge1651685921227';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`INSERT INTO \`creditLineTransactionTypes\` (\`id\`, \`name\`, \`description\`, \`movementType\`) VALUES (11, "Cargo de deuda inicial de cuenta", "Cuando una linea se calcula por primera vez y el usuario tenía deuda existente", 3)`
		);
	}

	public async down(): Promise<void> {
		// Do nothing, deletes aren't allowed
	}
}
