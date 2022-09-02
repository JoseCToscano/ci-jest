import {MigrationInterface, QueryRunner} from "typeorm";

export class DisbursementEntity1625680901388 implements MigrationInterface {
    name = 'DisbursementEntity1625680901388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `disbursements` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `disbursementDate` datetime(0) NOT NULL, `disbursedAmount` double NOT NULL, `adminResponsibleId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `disbursementId` int NULL");
        await queryRunner.query("ALTER TABLE `disbursements` ADD CONSTRAINT `FK_3707fcb6158f901c37efc9735f4` FOREIGN KEY (`adminResponsibleId`) REFERENCES `adminsV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `creditosV3` ADD CONSTRAINT `FK_38ac5bf578a397cddc6223ae0b1` FOREIGN KEY (`disbursementId`) REFERENCES `disbursements`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP FOREIGN KEY `FK_38ac5bf578a397cddc6223ae0b1`");
        await queryRunner.query("ALTER TABLE `disbursements` DROP FOREIGN KEY `FK_3707fcb6158f901c37efc9735f4`");
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `disbursementId`");
        await queryRunner.query("DROP TABLE `disbursements`");
    }

}
