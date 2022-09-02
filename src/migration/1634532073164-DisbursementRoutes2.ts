import {MigrationInterface, QueryRunner} from "typeorm";

export class DisbursementRoutes21634532073164 implements MigrationInterface {
    name = 'DisbursementRoutes21634532073164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/sendBankTransfer','POST'), ('/v3/admin/disbursement/confirmBankTransfer','POST'),('/v3/admin/disbursement/triggerDisbursement','POST'),('/v3/admin/disbursement/addBalanceContribution','POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/sendBankTransfer','/v3/admin/disbursement/confirmBankTransfer','/v3/admin/disbursement/triggerDisbursement','/v3/admin/disbursement/addBalanceContribution');`);
    }

}
