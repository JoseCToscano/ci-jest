import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasFirmarDosVeces1602528014494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/nuevoContrato', 'POST'), ('/v3/admin/creditos/getInfoEditarContrato', 'GET');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/nuevoContrato', '/v3/admin/creditos/getInfoEditarContrato');`);

    }
}

