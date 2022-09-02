import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnaIsAfiliacionExpressCredito1624290311674 implements MigrationInterface {
    name = 'ColumnaIsAfiliacionExpressCredito1624290311674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `isAfiliacionExpress` tinyint NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `isAfiliacionExpress`");
    }

}
