import {MigrationInterface, QueryRunner} from "typeorm";

export class crm3PaymentOptionsRoutes1638652982653 implements MigrationInterface {
    name = 'crm3PaymentOptionsRoutes1638652982653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/getApplicablePaymentOption', 'GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/getApplicablePaymentOption');`);
    }
}
