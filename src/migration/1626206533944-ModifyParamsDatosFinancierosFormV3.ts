import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyParamsDatosFinancierosFormV31626206533944 implements MigrationInterface {
    name = 'ModifyParamsDatosFinancierosFormV31626206533944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `datosFinancieros` ADD `isAutoempleado` tinyint NULL");
        await queryRunner.query("ALTER TABLE `datosFinancieros` ADD `idIndustriaLaboral` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `datosFinancieros` DROP COLUMN `idIndustriaLaboral`");
        await queryRunner.query("ALTER TABLE `datosFinancieros` DROP COLUMN `isAutoempleado`");
    }

}
