import {MigrationInterface, QueryRunner} from "typeorm";

export class columnaReferenciaCIE1611616103003 implements MigrationInterface {
    name = 'columnaReferenciaCIE1611616103003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `referenciaCIE` varchar(20) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `referenciaCIE`");
    }

}
