import {MigrationInterface, QueryRunner} from "typeorm";

export class configuracionWebhooks2FA1617997749359 implements MigrationInterface {
    name = 'configuracionWebhooks2FA1617997749359'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query("ALTER TABLE `webhooks` ADD `authenticationType` varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `webhooks` ADD `authenticationProvider` varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `webhooks` ADD `secretkeybase32` varchar(500) NULL");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `secretkeybase32`");
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `authenticationProvider`");
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `authenticationType`");


    }

}
