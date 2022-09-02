import {MigrationInterface, QueryRunner} from "typeorm";

export class RegistroEmailsEnviados1620984873399 implements MigrationInterface {
    name = 'RegistroEmailsEnviados1620984873399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `emailsEnviados` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `destino` varchar(90) NOT NULL, `textoEnviado` varchar(200) NOT NULL, `registroAccionAutomaticaId` int NULL, UNIQUE INDEX `REL_c4e692b7924481182c018dfab9` (`registroAccionAutomaticaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `emailsEnviados` ADD CONSTRAINT `FK_c4e692b7924481182c018dfab9b` FOREIGN KEY (`registroAccionAutomaticaId`) REFERENCES `registrosAccionesAutomaticas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `emailsEnviados` DROP FOREIGN KEY `FK_c4e692b7924481182c018dfab9b`");
        await queryRunner.query("DROP INDEX `REL_c4e692b7924481182c018dfab9` ON `emailsEnviados`");
        await queryRunner.query("DROP TABLE `emailsEnviados`");
    }

}
