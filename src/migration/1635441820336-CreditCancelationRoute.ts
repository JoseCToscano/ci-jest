import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditCancelationRoute1635441820336 implements MigrationInterface {
    name = 'CreditCancelationRoute1635441820336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/addCreditCancelation','POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/addCreditCancelation');`);
    }

}
