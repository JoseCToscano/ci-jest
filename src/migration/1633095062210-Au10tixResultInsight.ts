import {MigrationInterface, QueryRunner} from "typeorm";

export class Au10tixResultInsight1633095062210 implements MigrationInterface {
    name = 'Au10tixResultInsight1633095062210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` ADD \`resultInsight\` varchar(500) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` DROP COLUMN \`resultInsight\``);
    }

}
