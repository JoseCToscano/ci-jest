import { MigrationInterface, QueryRunner } from 'typeorm';

export class addAdvisorInformationToInitialQueryParams1653941456155
	implements MigrationInterface
{
	name = 'addAdvisorInformationToInitialQueryParams1653941456155';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`initialQueryParams\` ADD \`advisorInformation\` tinyint NULL DEFAULT 0`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`initialQueryParams\` DROP COLUMN \`advisorInformation\``
		);
	}
}
