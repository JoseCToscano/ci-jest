import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasCambiarComercioCreditos1619178755689 implements MigrationInterface {
    name = 'rutasCambiarComercioCreditos1619178755689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/cambiarComercio', 'POST'),('/v3/admin/creditos/getComerciosWithSucursales', 'GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/cambiarComercio','/v3/admin/creditos/getComerciosWithSucursales');`);
    }

}
