import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnForSavingAdminIdOfOffer1635006395359 implements MigrationInterface {
    name = 'ColumnForSavingAdminIdOfOffer1635006395359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`idAdmin\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`adminVersion\` varchar(10) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`adminVersion\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`idAdmin\``);
    }
}
