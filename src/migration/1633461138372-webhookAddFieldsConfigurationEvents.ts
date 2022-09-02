import {MigrationInterface, QueryRunner} from "typeorm";

export class webhookAddFieldsConfigurationEvents1633461138372 implements MigrationInterface {
    name = 'webhookAddFieldsConfigurationEvents1633461138372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`webhookEventurl\` varchar(600) NULL`);
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`webhookEventTypeAuth\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`webhookEventUrlToken\` varchar(600) NULL`);
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`webhookEventUser\` varchar(250) NULL`);
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`webhookEventPassword\` varchar(250) NULL`);
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`webhookEventActive\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`webhookEventActive\``);
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`webhookEventPassword\``);
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`webhookEventUser\``);
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`webhookEventUrlToken\``);
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`webhookEventTypeAuth\``);
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`webhookEventurl\``);
    }

}
