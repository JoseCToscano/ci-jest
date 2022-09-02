import {MigrationInterface, QueryRunner} from "typeorm";

export class TablaOrdenesEcommerce1609356019047 implements MigrationInterface {
    name = 'TablaOrdenesEcommerce1609356019047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ordenesEcommerce` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idSolicitud` int NULL, `orderNumber` varchar(50) NOT NULL, `orderId` varchar(50) NOT NULL, `comercio` int NOT NULL, `sucursal` int NOT NULL, `plataforma` varchar(50) NOT NULL, `status` varchar(50) NOT NULL, `precio` double NOT NULL, `producto` varchar(5000) NOT NULL, `nombre` varchar(300) NOT NULL, `email` varchar(300) NOT NULL, `telefono` varchar(50) NOT NULL, UNIQUE INDEX `IDX_c6c5004dd2859ac5ad16af5c11` (`idSolicitud`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_c6c5004dd2859ac5ad16af5c11` ON `ordenesEcommerce`");
        await queryRunner.query("DROP TABLE `ordenesEcommerce`");
    }
}
