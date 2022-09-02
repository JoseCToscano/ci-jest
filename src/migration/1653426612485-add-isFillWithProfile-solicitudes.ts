import { MigrationInterface, QueryRunner } from 'typeorm';

export class addIsFillWithProfileSolicitudes1653426612485
	implements MigrationInterface
{
	name = 'addIsFillWithProfileSolicitudes1653426612485';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`solicitudes\` ADD \`isFillWithProfile\` tinyint NOT NULL DEFAULT 0`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`solicitudes\` DROP COLUMN \`isFillWithProfile\``
		);
	}
}
