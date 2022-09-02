import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoEntityRegistroCreditoEditado1602195361510 implements MigrationInterface {
    name = 'AgregandoEntityRegistroCreditoEditado1602195361510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `registrosCreditoEditado` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `montoOtorgado` double NOT NULL, `comisionComercio` double NOT NULL, `numeroParcialidades` int NOT NULL, `fechaPrimerPago` datetime(0) NOT NULL, `isQuincenal` tinyint NOT NULL, `pagoMensualNeto` double NOT NULL, `contratoFirmado` int NOT NULL, `comercio` int NOT NULL, `sucursal` int NOT NULL, `creditoId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `registrosCreditoEditado` ADD CONSTRAINT `FK_afe7415f370a7d8c09f9b0c5482` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `registrosCreditoEditado` DROP FOREIGN KEY `FK_afe7415f370a7d8c09f9b0c5482`");
        await queryRunner.query("DROP TABLE `registrosCreditoEditado`");
    }

}
