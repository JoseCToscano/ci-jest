import {MigrationInterface, QueryRunner} from "typeorm";

export class OrdenesEcommerceNullColumns1610219521357 implements MigrationInterface {
    name = 'OrdenesEcommerceNullColumns1610219521357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `orderNumber` `orderNumber` varchar(50) NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `producto` `producto` varchar(5000) NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `nombre` `nombre` varchar(300) NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `email` `email` varchar(300) NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `telefono` `telefono` varchar(50) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `telefono` `telefono` varchar(50) NOT NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `email` `email` varchar(300) NOT NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `nombre` `nombre` varchar(300) NOT NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `producto` `producto` varchar(5000) NOT NULL");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` CHANGE `orderNumber` `orderNumber` varchar(50) NOT NULL");
    }

}
