import {MigrationInterface, QueryRunner} from "typeorm";

export class EliminarOrdernesWebhook1629145124573 implements MigrationInterface {
    name = 'EliminarOrdernesWebhook1629145124573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`eliminarOrdenes\` tinyint NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`eliminarOrdenes\``);
    }

}
