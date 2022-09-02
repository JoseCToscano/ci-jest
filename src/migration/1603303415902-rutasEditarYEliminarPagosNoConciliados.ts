import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasEditarYEliminarPagosNoConciliados1603303415902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/pagos/editarPago', 'POST'), ('/v3/admin/pagos/eliminarPago', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/pagos/editarPago', '/v3/admin/pagos/eliminarPago');`);
    }

}
