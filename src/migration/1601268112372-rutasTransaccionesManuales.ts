import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasTransaccionesManuales1601268112372 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV !== "test") {
      await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/getTiposTransaccion', 'GET'), ('/v3/admin/creditos/simularCambiosTransaccion', 'POST'), ('/v3/admin/creditos/realizarCambiosTransaccion', 'POST');`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/getTiposTransaccion', '/v3/admin/creditos/simularCambiosTransaccion', '/v3/admin/creditos/realizarCambiosTransaccion');`);
  }

}
