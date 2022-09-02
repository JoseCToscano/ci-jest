import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdminWhoDenied1657817915692 implements MigrationInterface {
	name = 'AdminWhoDenied1657817915692';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`solicitudes\` ADD \`adminWhoDenied\` varchar(100) NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`solicitudes\` DROP COLUMN \`adminWhoDenied\``
		);
	}
}
