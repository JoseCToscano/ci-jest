import { MigrationInterface, QueryRunner } from "typeorm";

export class rutasCreditoYPagos1600883755594 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV !== "test") {
      await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos', 'GET'), ('/v3/admin/creditos/getinfoCredito', 'GET'), ('/v3/admin/creditos/generarWhatsappCsv', 'POST'), ('/v3/admin/pagos/fetchFormasDePago', 'GET'), ('/v3/admin/pagos/agregarPago', 'POST'), ('/v3/admin/pagos/buscarPagosSimilares', 'POST'), ('/v3/admin/pagos/conciliarPago', 'POST'), ('/v3/admin/pagos', 'GET');`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos', '/v3/admin/creditos/getinfoCredito', '/v3/admin/creditos/generarWhatsappCsv', '/v3/admin/pagos/fetchFormasDePago', '/v3/admin/pagos/agregarPago', '/v3/admin/pagos/buscarPagosSimilares', '/v3/admin/pagos/conciliarPago', '/v3/admin/pagos');`);
  }

}
