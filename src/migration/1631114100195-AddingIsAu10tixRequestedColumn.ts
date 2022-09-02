import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingIsAu10tixRequestedColumn1631114100195 implements MigrationInterface {
    name = 'AddingIsAu10tixRequestedColumn1631114100195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`isAu10tixRequested\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`isAu10tixRequested\``);
    }
}
