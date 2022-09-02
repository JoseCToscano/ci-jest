import {MigrationInterface, QueryRunner} from "typeorm";

export class PendingDisbursementStatus1632932795855 implements MigrationInterface {
    name = 'PendingDisbursementStatus1632932795855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO statusEcommerce (plataform,tipo, status) VALUES ('MAGENTO','APROBADO','disbursed_pending_atrato')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM statusEcommerce WHERE status IN ('disbursed_pending_atrato') AND plataform IN ('MAGENTO')`);
    }

}
