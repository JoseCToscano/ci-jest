import {MigrationInterface, QueryRunner} from "typeorm";

export class CreandoTablaPartnersV3WithRelations1621364554446 implements MigrationInterface {
    name = 'CreandoTablaPartnersV3WithRelations1621364554446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `partnersV3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idComercio` int NOT NULL, `username` varchar(100) NOT NULL, `password` varchar(200) NOT NULL, `isEditor` tinyint NOT NULL, `isMaster` tinyint NOT NULL, UNIQUE INDEX `IDX_a3349bb93f4877e57049ab004b` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `partners_v3_sucursales_sucursales` (`partnersV3Id` int NOT NULL, `sucursalesIdSucursal` int NOT NULL, INDEX `IDX_81c8cece185153ce92c2b79958` (`partnersV3Id`), INDEX `IDX_1d27a61514e8d3e1332363e35f` (`sucursalesIdSucursal`), PRIMARY KEY (`partnersV3Id`, `sucursalesIdSucursal`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` ADD CONSTRAINT `FK_81c8cece185153ce92c2b799586` FOREIGN KEY (`partnersV3Id`) REFERENCES `partnersV3`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` ADD CONSTRAINT `FK_1d27a61514e8d3e1332363e35f5` FOREIGN KEY (`sucursalesIdSucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` DROP FOREIGN KEY `FK_1d27a61514e8d3e1332363e35f5`");
        await queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` DROP FOREIGN KEY `FK_81c8cece185153ce92c2b799586`");
        await queryRunner.query("DROP INDEX `IDX_1d27a61514e8d3e1332363e35f` ON `partners_v3_sucursales_sucursales`");
        await queryRunner.query("DROP INDEX `IDX_81c8cece185153ce92c2b79958` ON `partners_v3_sucursales_sucursales`");
        await queryRunner.query("DROP TABLE `partners_v3_sucursales_sucursales`");
        await queryRunner.query("DROP TABLE `partnersV3`");
    }

}
