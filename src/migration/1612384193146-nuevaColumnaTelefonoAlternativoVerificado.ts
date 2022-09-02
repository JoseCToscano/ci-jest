import {MigrationInterface, QueryRunner} from "typeorm";

export class nuevaColumnaTelefonoAlternativoVerificado1612384193146 implements MigrationInterface {
    name = 'nuevaColumnaTelefonoAlternativoVerificado1612384193146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuarios` ADD COLUMN `telefonoAlternativoVerificado` VARCHAR(20) NULL DEFAULT NULL AFTER `telefonoAlternativo`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuarios` DROP COLUMN `telefonoAlternativoVerificado`");
    }

}
