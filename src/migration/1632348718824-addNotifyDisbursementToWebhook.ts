import {MigrationInterface, QueryRunner} from "typeorm";

export class addNotifyDisbursementToWebhook1632348718824 implements MigrationInterface {
    name = 'addNotifyDisbursementToWebhook1632348718824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`notifyDisbursement\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`notifyDisbursement\``);
    }

}
