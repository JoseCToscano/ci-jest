import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBulkPaymentRoutes1642448137137 implements MigrationInterface {
    name = 'AddBulkPaymentRoutes1642448137137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/pagos/addPaymentsBulk','POST');`);    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/pagos/addPaymentsBulk');`);
    }

}
