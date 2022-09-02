import { MigrationInterface, QueryRunner } from 'typeorm';

export class AutomatedEngancheOfferStore1648765112155
	implements MigrationInterface
{
	name = 'AutomatedEngancheOfferStore1648765112155';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`sucursales\` ADD \`canSendEngancheAutomatedOffers\` tinyint NOT NULL DEFAULT 1`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`sucursales\` DROP COLUMN \`canSendEngancheAutomatedOffers\``
		);
	}
}
