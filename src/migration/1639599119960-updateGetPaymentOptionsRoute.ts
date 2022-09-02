import {MigrationInterface, QueryRunner} from "typeorm";

export class updateGetPaymentOptionsRoute1639599119960 implements MigrationInterface {
    name = 'updateGetPaymentOptionsRoute1639599119960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE`rutas` SET `ruta` = '/v3/admin/paymentOptions/getApplicablePayment' WHERE `ruta` = '/v3/admin/offerGenerator/getApplicablePayment'")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE`rutas` SET `ruta` = '/v3/admin/offerGenerator/getApplicablePayment' WHERE `ruta` = '/v3/admin/paymentOptions/getApplicablePayment'")
    }

}
