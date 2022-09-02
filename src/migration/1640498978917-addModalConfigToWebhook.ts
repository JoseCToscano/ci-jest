import {MigrationInterface, QueryRunner} from "typeorm";

export class addModalConfigToWebhook1640498978917 implements MigrationInterface {
    name = 'addModalConfigToWebhook1640498978917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`modalConfig\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`modalConfig\``);
    }

}
