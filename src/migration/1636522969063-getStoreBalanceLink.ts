import {MigrationInterface, QueryRunner} from "typeorm";

export class getStoreBalanceLink1636522969063 implements MigrationInterface {
    name = 'getStoreBalanceLink1636522969063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/disbursement/getStoreBalance','GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/disbursement/getStoreBalance');`);
    }

}
