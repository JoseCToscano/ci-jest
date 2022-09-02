import {MigrationInterface, QueryRunner} from "typeorm";

export class PerfilDeRiesgo1631537471573 implements MigrationInterface {
    name = 'PerfilDeRiesgo1631537471573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE solicitudes ADD perfilDeRiesgo varchar(2) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE solicitudes DROP COLUMN perfilDeRiesgo`);
    }

}
