import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoStatusEcommerce1620053222032 implements MigrationInterface {
    name = 'AgregandoStatusEcommerce1620053222032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO statusEcommerce(plataform, tipo, status) VALUES ('MAGENTO', 'INICIAL', 'pending'),('MAGENTO', 'INICIAL', 'pending_payment'),('MAGENTO', 'INICIAL', 'holded'), ('MAGENTO', 'APROBADO', 'processing'),('MAGENTO', 'APROBADO', 'complete'), ('MAGENTO', 'CANCELADO', 'cancel');`);
        await queryRunner.query(`INSERT INTO statusEcommerce(plataform, tipo, status) VALUES ('SHOPIFY', 'APROBADO', 'authorized'),('SHOPIFY', 'APROBADO', 'paid'), ('SHOPIFY', 'CANCELADO', 'void'), ('SHOPIFY', 'CANCELADO', 'cancel');`);
        await queryRunner.query(`INSERT INTO statusEcommerce(plataform, tipo, status) VALUES ('WOOCOMMERCE', 'INICIAL', 'on-hold'),('WOOCOMMERCE', 'INICIAL', 'pending'), ('WOOCOMMERCE', 'APROBADO', 'processing'), ('WOOCOMMERCE', 'APROBADO', 'completed'), ('WOOCOMMERCE', 'CANCELADO', 'cancelled'), ('WOOCOMMERCE', 'CANCELADO', 'failed');`);
        await queryRunner.query(`INSERT INTO statusEcommerce(plataform, tipo, status) VALUES ('OTHER', 'APROBADO', 'APROBADA'), ('OTHER', 'CANCELADO', 'RECHAZADA');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM statusEcommerce WHERE statusEcommerce.status IN ('pending', 'pending_payment', 'holded', 'processing', 'cancel', 'authorized', 'paid', 'void', 'on-hold', 'completed', 'cancelled', 'failed', 'APROBADA', 'RECHAZADA');`);
    }

}
