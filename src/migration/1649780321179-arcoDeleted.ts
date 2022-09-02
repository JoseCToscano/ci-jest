import { MigrationInterface, QueryRunner } from 'typeorm';

export class arcoDeleted1649780321179 implements MigrationInterface {
	name = 'arcoDeleted1649780321179';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`solicitudes\` ADD \`arcoDeleted\` tinyint NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`solicitudes\` DROP COLUMN \`arcoDeleted\``
		);
	}
}
