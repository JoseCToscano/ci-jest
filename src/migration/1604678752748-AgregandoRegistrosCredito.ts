import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoRegistrosCredito1604678752748 implements MigrationInterface {
    name = 'AgregandoRegistrosCredito1604678752748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `registrosStatusCredito` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `statusAntes` varchar(20) NOT NULL, `statusNuevo` varchar(20) NOT NULL, `montoEnAtraso` double NULL, `diasDeAtraso` int NULL, `creditoId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `registrosStatusCredito` ADD CONSTRAINT `FK_98b84f132c3bfde9b81eaadf654` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `registrosStatusCredito` DROP FOREIGN KEY `FK_98b84f132c3bfde9b81eaadf654`");
        await queryRunner.query("DROP TABLE `registrosStatusCredito`");
    }

}
