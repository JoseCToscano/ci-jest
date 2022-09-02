import {MigrationInterface, QueryRunner} from "typeorm";

export class AdditionalDisbursementRoutes1642099120240 implements MigrationInterface {
    name = 'AdditionalDisbursementRoutes1642099120240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/pendingStoreBalance','GET'), ('/v3/admin/disbursement/fetchBankTransfers','POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/pendingStoreBalance', '/v3/admin/disbursement/fetchBankTransfers');`);

    }

}
