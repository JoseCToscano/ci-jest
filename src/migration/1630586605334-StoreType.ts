import {MigrationInterface, QueryRunner} from "typeorm";

export class StoreType1630586605334 implements MigrationInterface {
    name = 'StoreType1630586605334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`idTipoSucursal\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`storeId\` \`storeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`commerceId\` \`commerceId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`code\` \`code\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`minPayments\` \`minPayments\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`maxPayments\` \`maxPayments\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`minPaymentsElegibility\` \`minPaymentsElegibility\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`maxPaymentsElegibility\` \`maxPaymentsElegibility\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`minAmount\` \`minAmount\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`maxAmount\` \`maxAmount\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD CONSTRAINT \`FK_d61ed23abc210a8f860e2d4ba37\` FOREIGN KEY (\`idTipoSucursal\`) REFERENCES \`tiposComercio\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP FOREIGN KEY \`FK_d61ed23abc210a8f860e2d4ba37\``);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`maxAmount\` \`maxAmount\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`minAmount\` \`minAmount\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`maxPaymentsElegibility\` \`maxPaymentsElegibility\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`minPaymentsElegibility\` \`minPaymentsElegibility\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`maxPayments\` \`maxPayments\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`minPayments\` \`minPayments\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`code\` \`code\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`commerceId\` \`commerceId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`promotions\` CHANGE \`storeId\` \`storeId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`idTipoSucursal\``);
    }

}
