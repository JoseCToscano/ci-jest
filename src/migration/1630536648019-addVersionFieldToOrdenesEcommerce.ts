import {MigrationInterface, QueryRunner} from "typeorm";

export class addVersionFieldToOrdenesEcommerce1630536648019 implements MigrationInterface {
    name = 'addVersionFieldToOrdenesEcommerce1630536648019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` ADD \`version\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` DROP COLUMN \`version\``);
    }

}
