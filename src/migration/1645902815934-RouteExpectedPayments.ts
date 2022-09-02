import {MigrationInterface, QueryRunner} from "typeorm";

export class RouteExpectedPayments1645902815934 implements MigrationInterface {
    name = 'RouteExpectedPayments1645902815934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/computeExpectedPaymentsCSV', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/tesoreria/computeExpectedPaymentsCSV');`);
    }

}
