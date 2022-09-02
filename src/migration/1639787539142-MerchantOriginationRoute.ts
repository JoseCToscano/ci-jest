import {MigrationInterface, QueryRunner} from "typeorm";

export class MerchantOriginationRoute1639787539142 implements MigrationInterface {
    name = 'MerchantOriginationRoute1639787539142'

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/computeMerchantOrigination', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/tesoreria/computeMerchantOrigination');`);
    }

}
