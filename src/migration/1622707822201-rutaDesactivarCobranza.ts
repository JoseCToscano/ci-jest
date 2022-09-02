import {MigrationInterface, QueryRunner} from "typeorm";

export class rutaDesactivarCobranza1622707822201 implements MigrationInterface {
    name = 'rutaDesactivarCobranza1622707822201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/desactivarCobranza', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/desactivarCobranza');`);
    }

}
