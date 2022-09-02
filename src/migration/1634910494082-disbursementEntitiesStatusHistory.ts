import {MigrationInterface, QueryRunner} from "typeorm";

export class disbursementEntitiesStatusHistory1634910494082 implements MigrationInterface {
    name = 'disbursementEntitiesStatusHistory1634910494082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/getHistoryFromBalanceU','GET'), ('/v3/admin/disbursement/getHistoryFromBankTran','GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/getHistoryFromBalanceU', '/v3/admin/disbursement/getHistoryFromBankTran');`);
    }

}
