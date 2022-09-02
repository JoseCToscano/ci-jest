import {MigrationInterface, QueryRunner} from "typeorm";

export class RutasCobranzaFiltros1620643973639 implements MigrationInterface {
    name = 'RutasCobranzaFiltros1620643973639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/cobranza/getTableFilterOptions', 'GET') ;`);
        await queryRunner.query(`UPDATE rutas SET metodo = 'POST' WHERE rutas.ruta = '/v3/admin/cobranza';`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE rutas SET metodo = 'GET' WHERE rutas.ruta = '/v3/admin/cobranza';`);
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/cobranza/getTableFilterOptions');`);
    }

}
