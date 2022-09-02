import {MigrationInterface, QueryRunner} from "typeorm";

export class TimeStampInDispute1640040426542 implements MigrationInterface {
    name = 'TimeStampInDispute1640040426542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`slackTimestampInDispute\` varchar(50) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`slackTimestampInDispute\``);
    }
}
