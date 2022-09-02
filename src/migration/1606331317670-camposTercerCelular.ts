import {MigrationInterface, QueryRunner} from "typeorm";

export class camposTercerCelular1606331317670 implements MigrationInterface {
    name = 'camposTercerCelular1606331317670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuarios` ADD `tercerTelefono` varchar(20) NULL");
        await queryRunner.query("ALTER TABLE `usuarios` ADD `descripcionTercerTelefono` tinytext NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuarios` DROP COLUMN `descripcionTercerTelefono`");
        await queryRunner.query("ALTER TABLE `usuarios` DROP COLUMN `tercerTelefono`");
    }

}
