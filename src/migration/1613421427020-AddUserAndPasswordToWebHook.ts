import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserAndPasswordToWebHook1613421427020 implements MigrationInterface {
    name = 'AddUserAndPasswordToWebHook1613421427020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhooks` ADD `userPlataform` varchar(600) NULL");
        await queryRunner.query("ALTER TABLE `webhooks` ADD `passwordPlataform` varchar(600) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `passwordPlataform`");
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `userPlataform`");
    }

}
