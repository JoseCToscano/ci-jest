import {MigrationInterface, QueryRunner} from "typeorm";

export class ExtraWebhookEvents1635542216424 implements MigrationInterface {
    name = 'ExtraWebhookEvents1635542216424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhookEvents\` ADD \`extra\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhookEvents\` DROP COLUMN \`extra\``);
    }

}
