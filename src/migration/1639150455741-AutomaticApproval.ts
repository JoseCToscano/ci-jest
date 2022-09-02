import {MigrationInterface, QueryRunner} from "typeorm";

export class AutomaticApproval1639150455739 implements MigrationInterface {
	name = 'AutomaticApproval1639150455739'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`isRecurrentUser\` tinyint NOT NULL DEFAULT 0`);
		await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`automaticApproval\` tinyint NOT NULL DEFAULT 0`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`isRecurrentUser\``);
		await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`automaticApproval\` tinyint NOT NULL DEFAULT 0`);
	}

}
