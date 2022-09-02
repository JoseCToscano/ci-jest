import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRiskProfile1650921646709 implements MigrationInterface {
	name = 'addRiskProfile1650921646709';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD \`riskProfile\` varchar(2) NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD \`riskUpdateAt\` datetime(0) NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP COLUMN \`riskUpdateAt\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP COLUMN \`riskProfile\``
		);
	}
}
