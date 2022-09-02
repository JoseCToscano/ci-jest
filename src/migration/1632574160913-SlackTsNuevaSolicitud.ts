import {MigrationInterface, QueryRunner} from "typeorm";

export class SlackTsNuevaSolicitud1632574160913 implements MigrationInterface {
    name = 'SlackTsNuevaSolicitud1632574160913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`slackTimeStampNuevaSolicitud\` varchar(20) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`slackTimeStampNuevaSolicitud\``);
    }

}
