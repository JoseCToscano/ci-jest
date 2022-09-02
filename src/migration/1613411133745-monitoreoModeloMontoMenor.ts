import {MigrationInterface, QueryRunner} from "typeorm";

export class monitoreoModeloMontoMenor1613411133745 implements MigrationInterface {
    name = 'monitoreoModeloMontoMenor1613411133745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `monitoreoModeloMontoMenor` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `solicitud` int NOT NULL, `nombreModelo` varchar(25) NULL, `score` double NULL, `threshold` float NULL, `decisionModelo` varchar(25) NULL, `decisionReal` varchar(25) NULL, `insightDecisionReal` text NULL, UNIQUE INDEX `IDX_23e7b02dd3d81710dfa01c3d14` (`solicitud`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `resultadosPreAprobacion` ADD `isDecisionFilteredByPPM` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `resultadosPreAprobacion` DROP COLUMN `isDecisionFilteredByPPM`");
        await queryRunner.query("DROP TABLE `monitoreoModeloMontoMenor`");
    }

}
