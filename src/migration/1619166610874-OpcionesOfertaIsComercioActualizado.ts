import {MigrationInterface, QueryRunner} from "typeorm";

export class OpcionesOfertaIsComercioActualizado1619166610874 implements MigrationInterface {
    name = 'OpcionesOfertaIsComercioActualizado1619166610874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` ADD `isComercioActualizado` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` DROP COLUMN `isComercioActualizado`");
    }

}
