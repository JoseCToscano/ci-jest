import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditosDesembolsados1618487909388 implements MigrationInterface {
    name = 'CreditosDesembolsados1618487909388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `desembolsado` tinyint NOT NULL DEFAULT false");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `productoEntregado` tinyint NOT NULL DEFAULT false");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `personaQuienEntrego` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `descripcionProductoEntregado` varchar(200) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `descripcionProductoEntregado`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `personaQuienEntrego`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `productoEntregado`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `desembolsado`");
    }

}
