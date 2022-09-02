import {MigrationInterface, QueryRunner} from "typeorm";

export class AddGetNeuroIdDataRoute1646694761519 implements MigrationInterface {
    name = 'AddGetNeuroIdDataRoute1646694761519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/neuroIdData','GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/neuroIdData');`);
    }

}
