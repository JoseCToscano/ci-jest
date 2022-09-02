import {MigrationInterface, QueryRunner} from "typeorm";

export class RutaFetchBankTransfersInfo1641478819198 implements MigrationInterface {
    name = 'RutaFetchBankTransfersInfo1641478819198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/fetchBankTransfersInfo', 'POST')`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/fetchBankTransfersInfo');`);

    }

}
