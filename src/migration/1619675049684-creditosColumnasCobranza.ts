import {MigrationInterface, QueryRunner} from "typeorm";

export class creditosColumnasCobranza1619675049684 implements MigrationInterface {
    name = 'creditosColumnasCobranza1619675049684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `etiquetaCobranza` varchar(45) NULL");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `adminCobradorId` int NULL");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD CONSTRAINT `FK_2fe1af776d4e099adf15d87db78` FOREIGN KEY (`adminCobradorId`) REFERENCES `adminsV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP FOREIGN KEY `FK_2fe1af776d4e099adf15d87db78`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `adminCobradorId`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `etiquetaCobranza`");
    }

}
