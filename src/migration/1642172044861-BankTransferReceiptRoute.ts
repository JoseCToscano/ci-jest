import {MigrationInterface, QueryRunner} from "typeorm";

export class BankTransferReceiptRoute1642172044861 implements MigrationInterface {
    name = 'BankTransferReceiptRoute1642172044861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/partner/dashboard/bankTransferReceipt', 'GET')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/partner/dashboard/bankTransferReceipt');`);
    }

}
