import {MigrationInterface, QueryRunner} from "typeorm";

export class FieldsCancelacionCredito1623078499556 implements MigrationInterface {
    name = 'FieldsCancelacionCredito1623078499556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `personaSolicitaCancelacion` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `motivoCancelacion` varchar(200) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `motivoCancelacion`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `personaSolicitaCancelacion`");
    }

}
