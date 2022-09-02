import {MigrationInterface, QueryRunner} from "typeorm";

export class RutaDesembolsosBulk1631286604403 implements MigrationInterface {
    name = 'RutaDesembolsosBulk1631286604403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/getCreditosBySolicitudList', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/getCreditosBySolicitudList');`);
    }

}
