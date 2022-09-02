import {MigrationInterface, QueryRunner} from "typeorm";

export class tipoComercio1623946615630 implements MigrationInterface {
    name = 'tipoComercio1623946615630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tiposComercio` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `clave` varchar(45) NOT NULL, UNIQUE INDEX `IDX_efac2fc45430a925bce4b4d2d2` (`clave`), PRIMARY KEY (`id`)) ENGINE=InnoDB;");
        await queryRunner.query("ALTER TABLE `comercios` ADD `tipoComercioId` int NULL");
        await queryRunner.query("ALTER TABLE `comercios` ADD  INDEX `FK_7e0aaf958d777048871b127926d` (`tipoComercioId`);");
        await queryRunner.query("ALTER TABLE `comercios` ADD CONSTRAINT `FK_7e0aaf958d777048871b127926d` FOREIGN KEY (`tipoComercioId`) REFERENCES `tiposComercio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("INSERT INTO `tiposComercio` (`clave`) VALUES ('DIAMANTE'),('PLATINO'),('ORO'),('PLATA'),('BRONCE')");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comercios` DROP FOREIGN KEY `FK_7e0aaf958d777048871b127926d`");
        await queryRunner.query("ALTER TABLE `comercios` DROP COLUMN `tipoComercioId`");
        await queryRunner.query("DROP TABLE `tiposComercio`");
    }

}
