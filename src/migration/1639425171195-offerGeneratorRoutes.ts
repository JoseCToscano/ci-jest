import {MigrationInterface, QueryRunner} from "typeorm";

export class offerGeneratorRoutes1639425171195 implements MigrationInterface {
    name = 'offerGeneratorRoutes1639425171195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/offers/generateOfferParams', 'POST'), ('/v3/admin/offerGenerator/getApplicablePayment', 'GET'), ('/v3/admin/offerGenerator/getMerchants', 'GET'), ('/v3/admin/offerGenerator/getStoresFromMerchan', 'GET'), ('/v3/admin/offerGenerator/getLoanTypes', 'GET'), ('/v3/admin/offerGenerator/getApplicationInform', 'GET'), ('/v3/admin/offerGenerator/getCanBeResign', 'GET');`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/offers/generateOfferParams', '/v3/admin/offerGenerator/getApplicablePayment', '/v3/admin/offerGenerator/getMerchants', '/v3/admin/offerGenerator/getStoresFromMerchan', '/v3/admin/offerGenerator/getLoanTypes', '/v3/admin/offerGenerator/getApplicationInform', '/v3/admin/offerGenerator/getCanBeResign');`);
    }

}
