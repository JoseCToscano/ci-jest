import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRoutesPromoCRUD1646788408394 implements MigrationInterface {
    name = 'AddRoutesPromoCRUD1646788408394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/paymentOptions/singlePaymentOption', 'GET'), ('/v3/admin/paymentOptions/addNewPromo', 'POST'), ('/v3/admin/paymentOptions/editPromo', 'POST')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/paymentOptions/singlePaymentOption', '/v3/admin/paymentOptions/editPromo'`);
    }

}
