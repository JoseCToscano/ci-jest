import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregarColumnaNotificarUsuario1602692100423 implements MigrationInterface {
    name = 'AgregarColumnaNotificarUsuario1602692100423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `notificarUsuario` tinyint NOT NULL DEFAULT 1");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `notificarUsuario`");
    }
}
