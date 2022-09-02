import {MigrationInterface, QueryRunner} from "typeorm";

export class NuevosStatusMagento1630588956578 implements MigrationInterface {
    name = 'NuevosStatusMagento1630588956578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO statusEcommerce (plataform,tipo, status) VALUES ('MAGENTO','INICIAL','pending_atrato')`);
        await queryRunner.query(`INSERT INTO statusEcommerce (plataform,tipo, status) VALUES ('MAGENTO','APROBADO','signed_atrato')`);
        await queryRunner.query(`INSERT INTO statusEcommerce (plataform,tipo, status) VALUES ('MAGENTO','CANCELADO','canceled_atrato')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM statusEcommerce WHERE status IN ('pending_atrato') AND plataform IN ('MAGENTO')`);
        await queryRunner.query(`DELETE FROM statusEcommerce WHERE status IN ('signed_atrato') AND plataform IN ('MAGENTO')`);
        await queryRunner.query(`DELETE FROM statusEcommerce WHERE status IN ('canceled_atrato') AND plataform IN ('MAGENTO')`);
    }

}
