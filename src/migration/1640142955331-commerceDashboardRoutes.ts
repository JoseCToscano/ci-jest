import {MigrationInterface, QueryRunner} from "typeorm";

export class commerceDashboardRoutes1640142955331 implements MigrationInterface {
    name = 'commerceDashboardRoutes1640142955331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/stores/getStores', 'GET'), ('/v3/admin/merchants/getMerchants', 'GET'), ('/v3/admin/paymentOptions/getPaymentOptions', 'GET'), ('/v3/admin/stores/saveStore', 'POST'), ('/v3/admin/paymentOptions/savePaymentOption', 'POST'), ('/v3/admin/merchants/saveMerchantCommercial', 'POST'), ('/v3/admin/merchants/saveMerchant', 'POST'), ('/v3/admin/stores/getBankIntitutions', 'GET'), ('/v3/admin/stores/getDisbursementType', 'GET'), ('/v3/admin/stores/getAllStoreTypes', 'GET');`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/stores/getStores', '/v3/admin/merchants/getMerchants', '/v3/admin/paymentOptions/getPaymentOptions', '/v3/admin/stores/saveStore', '/v3/admin/paymentOptions/savePaymentOption', '/v3/admin/merchants/saveMerchantCommercial', '/v3/admin/merchants/saveMerchant', '/v3/admin/stores/getBankIntitutions', '/v3/admin/stores/getDisbursementType', '/v3/admin/stores/getAllStoreTypes');`);
    }

}
