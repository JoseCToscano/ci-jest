import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasCobranza1619510485160 implements MigrationInterface {
    name = 'rutasCobranza1619510485160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/cobranza', 'GET'), ('/v3/admin/cobranza/getPromesasDePago', 'GET'), ('/v3/admin/cobranza/getInfoPromesaDePago', 'GET'), ('/v3/admin/cobranza/changeEtiquetaCobranza', 'POST'), ('/v3/admin/cobranza/changeMotivoAtraso', 'POST'), ('/v3/admin/cobranza/changeAdminCobrador', 'POST'), ('/v3/admin/cobranza/nuevaPromesaDePago', 'POST'), ('/v3/admin/cobranza/enviarLlamadaCobranza', 'POST'), ('/v3/admin/cobranza/borrarPromesa', 'POST') ;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/cobranza', '/v3/admin/cobranza/getPromesasDePago', '/v3/admin/cobranza/getInfoPromesaDePago',  '/v3/admin/cobranza/changeEtiquetaCobranza', '/v3/admin/cobranza/changeMotivoAtraso', '/v3/admin/cobranza/changeAdminCobrador', '/v3/admin/cobranza/nuevaPromesaDePago', '/v3/admin/cobranza/enviarLlamadaCobranza',  '/v3/admin/cobranza/borrarPromesa');`);
    }

}
