import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdenEstadosStaticEstadosSolicitud1642084889524 implements MigrationInterface {
    name = 'OrdenEstadosStaticEstadosSolicitud1642084889524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` ADD \`ordenEstados\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` DROP COLUMN \`ordenEstados\``);
    }
}
