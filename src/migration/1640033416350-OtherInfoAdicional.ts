import {MigrationInterface, QueryRunner} from "typeorm";

export class OtherInfoAdicional1640033416350 implements MigrationInterface {
    name = 'OtherInfoAdicional1640033416350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`additionalInfo\` ADD \`other\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`additionalInfo\` DROP COLUMN \`other\``);
    }

}
