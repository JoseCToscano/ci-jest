import {MigrationInterface, QueryRunner} from "typeorm";

export class columnaIsMatiRequested1612488963516 implements MigrationInterface {
    name = 'columnaIsMatiRequested1612488963516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `isMatiRequested` tinyint NOT NULL DEFAULT 1");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `isMatiRequested`");
    }

}
