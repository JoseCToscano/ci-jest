import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDigitalIdentitiyModelColumnToNeuroIdDataTable1647391458189
	implements MigrationInterface
{
	name = 'AddDigitalIdentitiyModelColumnToNeuroIdDataTable1647391458189';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`neuroIdData\` ADD \`digitalIdentityModel\` varchar(60) NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`neuroIdData\` DROP COLUMN \`digitalIdentityModel\``
		);
	}
}
