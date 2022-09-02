import { MigrationInterface, QueryRunner } from 'typeorm';

export class chargeId1649778369054 implements MigrationInterface {
	name = 'chargeId1649778369054';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`conektaOrders\` ADD \`applicationId\` int NOT NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`conektaOrders\` DROP COLUMN \`applicationId\``
		);
	}
}
