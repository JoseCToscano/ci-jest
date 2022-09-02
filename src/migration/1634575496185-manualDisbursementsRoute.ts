import {MigrationInterface, QueryRunner} from "typeorm";

export class manualDisbursementsRoute1634575496185 implements MigrationInterface {
    name = 'manualDisbursementsRoute1634575496185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/addManualBalanceContri','POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/addManualBalanceContri');`);
    }

}
