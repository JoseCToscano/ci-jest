import { MigrationInterface, QueryRunner } from 'typeorm';

export class PaywallMetrics1648569062179 implements MigrationInterface {
	name = 'PaywallMetrics1648569062179';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`offers\` ADD \`offerSenderType\` int NOT NULL DEFAULT '0'`
		);
		await queryRunner.query(
			`ALTER TABLE \`creditosV3\` ADD \`completedEnganche\` tinyint NOT NULL DEFAULT 0`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`creditosV3\` DROP COLUMN \`completedEnganche\``
		);
		await queryRunner.query(
			`ALTER TABLE \`offers\` DROP COLUMN \`offerSenderType\``
		);
	}
}
