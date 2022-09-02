import {MigrationInterface, QueryRunner} from "typeorm";

export class PromesasDePagoV31621235423120 implements MigrationInterface {
    name = 'PromesasDePagoV31621235423120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `promesasDePagoV3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `monto` double NOT NULL, `fechaPagoEsperada` datetime(0) NOT NULL, `creditoId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `promesasDePagoV3` ADD CONSTRAINT `FK_61d0384703effb793d8e478b8fa` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promesasDePagoV3` DROP FOREIGN KEY `FK_61d0384703effb793d8e478b8fa`");
        await queryRunner.query("DROP TABLE `promesasDePagoV3`");
    }

}
