import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnIsAutomatic1632855986946 implements MigrationInterface {
    name = 'ColumnIsAutomatic1632855986946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`isAutomaticOffer\` tinyint NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`isAutomaticFlow\` tinyint NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`isAutomaticFlow\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`isAutomaticOffer\``);
    }

}
