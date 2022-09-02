import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateCancelBankTransferRoute1642700318541 implements MigrationInterface {
    name = 'UpdateCancelBankTransferRoute1642700318541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE rutas SET ruta = '/v3/admin/disbursement/cancelBankTransfer' WHERE rutas.ruta = '/v3/admin/disbursement/manualyCancelBankTrans'`);
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/updateBankTransfer', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE rutas SET ruta = '/v3/admin/disbursement/manualyCancelBankTrans' WHERE rutas.ruta = '/v3/admin/disbursement/cancelBankTransfer'`);
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/updateBankTransfer');`);
    }

}
