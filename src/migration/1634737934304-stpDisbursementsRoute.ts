import {MigrationInterface, QueryRunner} from "typeorm";

export class stpDisbursementsRoute1634737934304 implements MigrationInterface {
    name = 'stpDisbursementsRoute1634737934304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/manualyCancelBankTrans','POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/manualyCancelBankTrans');`);
    }
}