import {MigrationInterface, QueryRunner} from "typeorm";

export class ShopifyV2Flag1639079127303 implements MigrationInterface {
    name = 'ShopifyV2Flag1639079127303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` ADD \`shopifyV2\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhooks\` DROP COLUMN \`shopifyV2\``);
    }

}
