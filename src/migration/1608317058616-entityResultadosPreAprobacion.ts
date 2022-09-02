import {MigrationInterface, QueryRunner} from "typeorm";

export class entityResultadosPreAprobacion1608317058616 implements MigrationInterface {
    name = 'entityResultadosPreAprobacion1608317058616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `resultadosPreAprobacion` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `solicitud` int NOT NULL, `isCanceladoPorNorma` tinyint NOT NULL DEFAULT 0, `isPreAprobadoPorKarla` tinyint NOT NULL DEFAULT 0, `isComercioVIP` tinyint NOT NULL DEFAULT 0, `nombreModelo` varchar(25) NULL, `score` double NULL, `thVentanaSuperior` float NULL, `thVentanaInferior` float NULL, `decisionModelo` varchar(25) NULL, `decisionReal` varchar(25) NULL, UNIQUE INDEX `IDX_f84bed785a9b80a370923a5cbd` (`solicitud`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `resultadosPreAprobacion`");
    }

}
