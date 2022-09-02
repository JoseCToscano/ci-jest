import {MigrationInterface, QueryRunner} from "typeorm";

export class columnaInsightDecisionReal1610200937509 implements MigrationInterface {
    name = 'columnaInsightDecisionReal1610200937509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `resultadosPreAprobacion` ADD `insightDecisionReal` text NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `resultadosPreAprobacion` DROP COLUMN `insightDecisionReal`");
    }

}
