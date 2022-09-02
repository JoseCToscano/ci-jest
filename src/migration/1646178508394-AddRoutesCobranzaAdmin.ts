import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRoutesCobranzaAdmin1646178508394 implements MigrationInterface {
    name = 'AddRoutesCobranzaAdmin1646178508394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/cobranza/dasboardAdminCollector', 'POST'), ('/v3/admin/cobranza/getCommentsByCollector', 'GET'), ('/v3/admin/cobranza/getPromisePaymentByCollector', 'GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/cobranza/dasboardAdminCollector', '/v3/admin/cobranza/getCommentsByCollector', '/v3/admin/cobranza/getPromisePaymentByCollector');`);
    }

}
