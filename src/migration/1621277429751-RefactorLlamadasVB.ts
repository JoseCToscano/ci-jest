import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactorLlamadasVB1621277429751 implements MigrationInterface {
    name = 'RefactorLlamadasVB1621277429751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `llamadasVoiceBlasterRealizadas` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `telefono` varchar(15) NOT NULL, `mensaje` text NOT NULL, `creditoId` int NULL, `registroAccionAutomaticaId` int NULL, UNIQUE INDEX `REL_7bdd9f87973f01e6dde3455619` (`registroAccionAutomaticaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `llamadasVoiceBlasterRealizadas` ADD CONSTRAINT `FK_7bdd9f87973f01e6dde3455619e` FOREIGN KEY (`registroAccionAutomaticaId`) REFERENCES `registrosAccionesAutomaticas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `llamadasVoiceBlasterRealizadas` ADD CONSTRAINT `FK_d7bb98dd375bd606747edb524e5` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `llamadasVoiceBlasterRealizadas` DROP FOREIGN KEY `FK_d7bb98dd375bd606747edb524e5`");
        await queryRunner.query("ALTER TABLE `llamadasVoiceBlasterRealizadas` DROP FOREIGN KEY `FK_7bdd9f87973f01e6dde3455619e`");
        await queryRunner.query("DROP INDEX `REL_7bdd9f87973f01e6dde3455619` ON `llamadasVoiceBlasterRealizadas`");
        await queryRunner.query("DROP TABLE `llamadasVoiceBlasterRealizadas`");
    }

}
