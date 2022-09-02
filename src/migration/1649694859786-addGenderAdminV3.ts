import { MigrationInterface, QueryRunner } from 'typeorm';

export class addGenderAdminV31649694859786 implements MigrationInterface {
	name = 'addGenderAdminV31649694859786';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`adminsV3\` ADD \`gender\` int NULL`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`adminsV3\` DROP COLUMN \`gender\``);
	}
}
