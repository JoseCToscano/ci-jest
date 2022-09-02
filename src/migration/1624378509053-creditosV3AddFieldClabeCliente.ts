import {MigrationInterface, QueryRunner} from "typeorm";

export class creditosV3AddFieldClabeCliente1624378509053 implements MigrationInterface {
    name = 'creditosV3AddFieldClabeCliente1624378509053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `clabeCliente` varchar(18) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `clabeCliente`");
    }

}
