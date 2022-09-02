import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoRutaEstadoDeCuenta1611689406046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/estadosDeCuentaRouter/getEstadoPdf', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/estadosDeCuentaRouter/getEstadoPdf';`);
    }

}
