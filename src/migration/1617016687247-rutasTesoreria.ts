import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasTesoreria1617016687247 implements MigrationInterface {
    name = 'rutasTesoreria1617016687247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/generarCSVLiquidez', 'POST'),('/v3/admin/tesoreria/getQueryPagosPasados', 'GET');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/tesoreria/generarCSVLiquidez','/v3/admin/tesoreria/getQueryPagosPasados');`);
    }

}
