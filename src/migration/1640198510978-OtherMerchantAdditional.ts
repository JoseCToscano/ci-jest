import {MigrationInterface, QueryRunner} from "typeorm";

export class OtherMerchantAdditional1640198510978 implements MigrationInterface {
	name = 'OtherMerchantAdditional1640198510978'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`additionalInfo\` ADD \`otherMerchant\` tinyint NOT NULL DEFAULT 0`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE \`additionalInfo\` DROP COLUMN \`otherMerchant\``);
	}

}
