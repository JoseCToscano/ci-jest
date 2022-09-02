import {MigrationInterface, QueryRunner} from "typeorm";

export class IsCobranzaDesactivada1622100196334 implements MigrationInterface {
    name = 'IsCobranzaDesactivada1622100196334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `isCobranzaDesactivada` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `isCobranzaDesactivada`");
    }

}
