import {MigrationInterface, QueryRunner} from "typeorm";

export class PerfilAjustadoColumn1632487973574 implements MigrationInterface {
    name = 'PerfilAjustadoColumn1632487973574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`perfilDeRiesgoAjustado\` varchar(2) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`perfilDeRiesgoAjustado\``);
    }

}
