import {MigrationInterface, QueryRunner} from "typeorm";

export class RutasDesembolsos1626096274721 implements MigrationInterface {
    name = 'RutasDesembolsos1626096274721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/tesoreria/getDisbursements', 'GET'),('/v3/admin/tesoreria/addDisbursement', 'POST'), ('/v3/admin/tesoreria/editDisbursement','POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/tesoreria/getDisbursements', '/v3/admin/tesoreria/addDisbursement','/v3/admin/tesoreria/editDisbursement');`);
    }

}
