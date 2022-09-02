import {MigrationInterface, QueryRunner} from "typeorm";

export class RutaAccessUserDashboard1618426772366 implements MigrationInterface {
    name = 'RutaAccessUserDashboard1618426772366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/userDashboard', 'GET');`);
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/userDashboard/paymentWays', 'GET');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/accessUserDashboard', '/v3/admin/userDashboard/paymentWays');`);
    }
}
