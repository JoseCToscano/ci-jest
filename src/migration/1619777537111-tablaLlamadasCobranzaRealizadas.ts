import {MigrationInterface, QueryRunner} from "typeorm";

export class tablaLlamadasCobranzaRealizadas1619777537111 implements MigrationInterface {
    name = 'tablaLlamadasCobranzaRealizadas1619777537111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `llamadasCobranzaRealizadas` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `telefono` varchar(15) NOT NULL, `mensaje` text NOT NULL, `creditoId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` ADD CONSTRAINT `FK_40977f6d85c03982f80bd8f79c4` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `motivoAtraso` varchar(45) NULL");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` DROP FOREIGN KEY `FK_40977f6d85c03982f80bd8f79c4`");
        await queryRunner.query("DROP TABLE `llamadasCobranzaRealizadas`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `motivoAtraso`");

    }

}
