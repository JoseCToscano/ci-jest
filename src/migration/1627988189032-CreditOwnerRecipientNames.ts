import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditOwnerRecipientNames1627988189032 implements MigrationInterface {
    name = 'CreditOwnerRecipientNames1627988189032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditOwners` ADD `recipientName` varchar(60) NOT NULL");
        await queryRunner.query("UPDATE `creditOwners` SET `recipientName` = 'ATRATO TECHNOLOGIES SAPI DE CV' WHERE nombre = 'Atrato'");
        await queryRunner.query("UPDATE `creditOwners` SET `recipientName` = 'CIBANCO SA IBM FIDEICOMISO CIB 3665' WHERE nombre = 'Architect'");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditOwners` DROP COLUMN `recipientName`");
    }

}
