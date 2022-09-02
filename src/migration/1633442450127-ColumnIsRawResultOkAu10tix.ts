import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnIsRawResultOkAu10tix1633442450127 implements MigrationInterface {
    name = 'ColumnIsRawResultOkAu10tix1633442450127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` ADD \`isRawResultOk\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` DROP COLUMN \`isRawResultOk\``);
    }

}
