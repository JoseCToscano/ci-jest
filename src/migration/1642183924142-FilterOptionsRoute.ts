import {MigrationInterface, QueryRunner} from "typeorm";

export class FilterOptionsRoute1642183924142 implements MigrationInterface {
    name = 'FilterOptionsRoute1642183924142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/getTableFilterOptions','GET'),('/v3/admin/cobranza/getQuickFilterOptions','GET'),('/v3/admin/disbursement/getQuickFilterOptions','GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/getTableFilterOptions', '/v3/admin/cobranza/getQuickFilterOptions','/v3/admin/disbursement/getQuickFilterOptions');`);
    }

}
