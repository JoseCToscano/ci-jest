import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasComentariosCreditos1618307136996 implements MigrationInterface {
    name = 'rutasComentariosCreditos1618307136996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/agregarComentario', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/agregarComentario');`);
    }

}
