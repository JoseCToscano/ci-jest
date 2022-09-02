import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoRutaSeonCRM1605988633471 implements MigrationInterface {
    name = 'AgregandoRutaSeonCRM1605988633471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/seon', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/seon')`);
    }

}
