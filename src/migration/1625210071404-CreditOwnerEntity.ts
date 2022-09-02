import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditOwnerEntity1625210071404 implements MigrationInterface {
    name = 'CreditOwnerEntity1625210071404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `creditOwners` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `nombre` varchar(40) NOT NULL, `apiKey` varchar(30) NOT NULL, UNIQUE INDEX `IDX_a03fdb97270edea36c528af73b` (`nombre`), UNIQUE INDEX `IDX_75ca3ff9693f68ff1f8de47f37` (`apiKey`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("INSERT INTO `creditOwners` (nombre, apiKey) VALUES ('Atrato', 'key_Kjr6WrPw488Z9mpusnu4FA'),('Architect', 'key_XWsVzH3cAqosC3gUPWo45A')");
        await queryRunner.query("ALTER TABLE `SPEI` ADD `creditOwnerId` int NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `oxxoPay` ADD `creditOwnerId` int NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `creditOwnerId` int NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `SPEI` ADD  INDEX `FK_79578ce11a7c8b672212ae21fe9` (`creditOwnerId`);");
        await queryRunner.query("ALTER TABLE `SPEI` ADD CONSTRAINT `FK_79578ce11a7c8b672212ae21fe9` FOREIGN KEY (`creditOwnerId`) REFERENCES `creditOwners`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `oxxoPay` ADD  INDEX `FK_98abd69819baf49fa1f18c774a4` (`creditOwnerId`);");
        await queryRunner.query("ALTER TABLE `oxxoPay` ADD CONSTRAINT `FK_98abd69819baf49fa1f18c774a4` FOREIGN KEY (`creditOwnerId`) REFERENCES `creditOwners`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD  INDEX `FK_cde101a0f0cc4da19cbe9f41993` (`creditOwnerId`);");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD CONSTRAINT `FK_cde101a0f0cc4da19cbe9f41993` FOREIGN KEY (`creditOwnerId`) REFERENCES `creditOwners`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP FOREIGN KEY `FK_cde101a0f0cc4da19cbe9f41993`");
        await queryRunner.query("ALTER TABLE `oxxoPay` DROP FOREIGN KEY `FK_98abd69819baf49fa1f18c774a4`");
        await queryRunner.query("ALTER TABLE `SPEI` DROP FOREIGN KEY `FK_79578ce11a7c8b672212ae21fe9`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `creditOwnerId`");
        await queryRunner.query("ALTER TABLE `oxxoPay` DROP COLUMN `creditOwnerId`");
        await queryRunner.query("ALTER TABLE `SPEI` DROP COLUMN `creditOwnerId`");
        await queryRunner.query("DROP INDEX `IDX_75ca3ff9693f68ff1f8de47f37` ON `creditOwners`");
        await queryRunner.query("DROP INDEX `IDX_a03fdb97270edea36c528af73b` ON `creditOwners`");
        await queryRunner.query("DROP TABLE `creditOwners`");
    }

}
