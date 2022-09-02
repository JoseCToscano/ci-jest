import {MigrationInterface, QueryRunner} from "typeorm";

export class RutasIAMPartnerConfig1621518113569 implements MigrationInterface {
    name = 'RutasIAMPartnerConfig1621518113569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/iamPartner/addPartner', 'POST'),('/v3/admin/iamPartner/updatePartner', 'POST'),('/v3/admin/iamPartner/updatePassword', 'POST'),('/v3/admin/iamPartner/deactivatePartner', 'POST'),('/v3/admin/iamPartner/fetchPartners', 'GET'),('/v3/admin/iamPartner/fetchSinglePartner', 'GET'),('/v3/admin/iamPartner/getComerciosSucursales', 'GET');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/iamPartner/addPartner','/v3/admin/iamPartner/updatePartner', '/v3/admin/iamPartner/updatePassword', '/v3/admin/iamPartner/deactivatePartner','/v3/admin/iamPartner/fetchPartners', '/v3/admin/iamPartner/fetchSinglePartner', '/v3/admin/iamPartner/getComerciosSucursales');`);
    }

}
