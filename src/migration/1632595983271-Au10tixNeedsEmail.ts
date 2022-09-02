import {MigrationInterface, QueryRunner} from "typeorm";

export class Au10tixNeedsEmail1632595983271 implements MigrationInterface {
    name = 'Au10tixNeedsEmail1632595983271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` ADD \`needsEmail\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` DROP COLUMN \`needsEmail\``);
    }
}
