import {MigrationInterface, QueryRunner} from "typeorm";

export class ordenesEcommerceAddPrefillFields1643751537431 implements MigrationInterface {
    name = 'ordenesEcommerceAddPrefillFields1643751537431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` ADD \`preorder\` tinyint NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` ADD \`prefill\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` DROP COLUMN \`prefill\``);
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` DROP COLUMN \`preorder\``);
    }

}
