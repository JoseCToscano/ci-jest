import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyInitParamsSolicitud1625842901997 implements MigrationInterface {
    name = 'ModifyInitParamsSolicitud1625842901997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `isEcommerce` tinyint NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `isDisParam` tinyint NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `formVersion` varchar(20) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `isDisParam`");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `isEcommerce`");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `formVersion`");
    }
}