import {MigrationInterface, QueryRunner} from "typeorm";

export class RutaParaObtenerPromosParaRefirma1636252944170 implements MigrationInterface {
    name = 'RutaParaObtenerPromosParaRefirma1636252944170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/getApplicablePromotions', 'GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/getApplicablePromotions');`);
    }

}
