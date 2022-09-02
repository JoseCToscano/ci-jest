import {MigrationInterface, QueryRunner} from "typeorm";

export class changeLengthOrderIdEcommerce1634667946924 implements MigrationInterface {
    name = 'changeLengthOrderIdEcommerce1634667946924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` modify `orderNumber`  varchar(150) NULL;");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` modify `orderId`  varchar(150) NOT NULL;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` modify `orderNumber`  varchar(50) NULL;");
        await queryRunner.query("ALTER TABLE `ordenesEcommerce` modify `orderId`  varchar(50) NOT NULL;");
    }

}
