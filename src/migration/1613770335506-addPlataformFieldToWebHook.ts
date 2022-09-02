import {MigrationInterface, QueryRunner} from "typeorm";

export class addPlataformFieldToWebHook1613770335506 implements MigrationInterface {
    name = 'addPlataformFieldToWebHook1613770335506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhooks` ADD `plataform` varchar(100) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `plataform`");
    }

}
