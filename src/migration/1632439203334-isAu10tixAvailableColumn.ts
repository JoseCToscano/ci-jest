import {MigrationInterface, QueryRunner} from "typeorm";

export class isAu10tixAvailableColumn1632439203334 implements MigrationInterface {
    name = 'isAu10tixAvailableColumn1632439203334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`au10tixAvailable\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`au10tixAvailable\``);
    }

}
