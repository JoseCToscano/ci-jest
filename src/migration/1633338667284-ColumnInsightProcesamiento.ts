import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnInsightProcesamiento1633338667284 implements MigrationInterface {
    name = 'ColumnInsightProcesamiento1633338667284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`insightProcesamiento\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`insightProcesamiento\``);
    }

}
