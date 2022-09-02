import {MigrationInterface, QueryRunner} from "typeorm";

export class NormaEstadisticoMonitoreoEntity1615505436970 implements MigrationInterface {
    name = 'NormaEstadisticoMonitoreoEntity1615505436970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `monitoreoModeloNormaEstadistico` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `solicitud` int NOT NULL, `nombreModelo` varchar(25) NULL, `score` double NULL, `threshold` float NULL, `decisionModelo` varchar(25) NULL, `decisionReal` varchar(25) NULL, `insightDecisionReal` text NULL, UNIQUE INDEX `IDX_b4bf98f998ae8d1eae8a565d08` (`solicitud`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `monitoreoModeloNormaEstadistico`");
    }

}
