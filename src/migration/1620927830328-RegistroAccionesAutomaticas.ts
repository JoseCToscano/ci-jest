import {MigrationInterface, QueryRunner} from "typeorm";

export class RegistroAccionesAutomaticas1620927830328 implements MigrationInterface {
    name = 'RegistroAccionesAutomaticas1620927830328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `registrosAccionesAutomaticas` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `servicio` varchar(45) NOT NULL, `descripcion` varchar(70) NOT NULL, `motivo` varchar(45) NOT NULL, `creditoId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` ADD `registroAccionAutomaticaId` int NULL");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` ADD UNIQUE INDEX `IDX_3f1f13c90791350de4189df8d5` (`registroAccionAutomaticaId`)");
        await queryRunner.query("ALTER TABLE `smsEnviados` ADD `registroAccionAutomaticaId` int NULL");
        await queryRunner.query("ALTER TABLE `smsEnviados` ADD UNIQUE INDEX `IDX_792a6af75d35aa6789a42dd618` (`registroAccionAutomaticaId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3f1f13c90791350de4189df8d5` ON `llamadasCobranzaRealizadas` (`registroAccionAutomaticaId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_792a6af75d35aa6789a42dd618` ON `smsEnviados` (`registroAccionAutomaticaId`)");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` ADD CONSTRAINT `FK_3f1f13c90791350de4189df8d5c` FOREIGN KEY (`registroAccionAutomaticaId`) REFERENCES `registrosAccionesAutomaticas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `registrosAccionesAutomaticas` ADD CONSTRAINT `FK_fe26937db3d68ce21dc642e59ee` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `smsEnviados` ADD CONSTRAINT `FK_792a6af75d35aa6789a42dd6183` FOREIGN KEY (`registroAccionAutomaticaId`) REFERENCES `registrosAccionesAutomaticas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `smsEnviados` DROP FOREIGN KEY `FK_792a6af75d35aa6789a42dd6183`");
        await queryRunner.query("ALTER TABLE `registrosAccionesAutomaticas` DROP FOREIGN KEY `FK_fe26937db3d68ce21dc642e59ee`");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` DROP FOREIGN KEY `FK_3f1f13c90791350de4189df8d5c`");
        await queryRunner.query("DROP INDEX `REL_792a6af75d35aa6789a42dd618` ON `smsEnviados`");
        await queryRunner.query("DROP INDEX `REL_3f1f13c90791350de4189df8d5` ON `llamadasCobranzaRealizadas`");
        await queryRunner.query("ALTER TABLE `smsEnviados` DROP INDEX `IDX_792a6af75d35aa6789a42dd618`");
        await queryRunner.query("ALTER TABLE `smsEnviados` DROP COLUMN `registroAccionAutomaticaId`");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` DROP INDEX `IDX_3f1f13c90791350de4189df8d5`");
        await queryRunner.query("ALTER TABLE `llamadasCobranzaRealizadas` DROP COLUMN `registroAccionAutomaticaId`");
        await queryRunner.query("DROP TABLE `registrosAccionesAutomaticas`");
    }

}
