import { MigrationInterface, QueryRunner } from 'typeorm';

export class BannedFlag1650723873394 implements MigrationInterface {
	name = 'BannedFlag1650723873394';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`usersV3\` ADD \`bannedFromCreditLine\` tinyint NOT NULL DEFAULT 0`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`usersV3\` DROP COLUMN \`bannedFromCreditLine\``
		);
	}
}
