import {MigrationInterface, QueryRunner} from "typeorm";

export class disbursementsRoutes1634321295655 implements MigrationInterface {
    name = 'disbursementsRoutes1634321295655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/getAllCommerces', 'GET'), ('/v3/admin/disbursement/getCommerceStores', 'GET'), ('/v3/admin/disbursement/pendingBankTransfers', 'GET'), ('/v3/admin/disbursement/getBalanceContribution', 'GET'), ('/v3/admin/disbursement/getAppliedBankTransfer', 'GET'), ('/v3/admin/disbursement/confirmPendingBankTran', 'POST');`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/getAllCommerces', '/v3/admin/disbursement/getCommerceStores', '/v3/admin/disbursement/pendingBankTransfers', '/v3/admin/disbursement/getBalanceContribution', '/v3/admin/disbursement/getAppliedBankTransfer', '/v3/admin/disbursement/confirmPendingBankTran');`);
    }

}
