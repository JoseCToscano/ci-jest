import {MigrationInterface, QueryRunner} from "typeorm";

export class CommercesV31630078120177 implements MigrationInterface {
    name = 'CommercesV31630078120177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`paymentsPerStore\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`numberOfPayments\` int NOT NULL, \`storeId\` int NOT NULL, \`commision\` float NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`promotions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`a1InterestRate\` float NOT NULL, \`a2InterestRate\` float NOT NULL, \`a3InterestRate\` float NOT NULL, \`b1InterestRate\` float NOT NULL, \`b2InterestRate\` float NOT NULL, \`b3InterestRate\` float NOT NULL, \`c1InterestRate\` float NOT NULL, \`c2InterestRate\` float NOT NULL, \`c3InterestRate\` float NOT NULL, \`commision\` float NOT NULL DEFAULT '0', \`startingTime\` datetime(0) NOT NULL, \`endingTime\` datetime(0) NOT NULL, \`priority\` int NOT NULL, \`storeId\` int NOT NULL, \`commerceId\` int NOT NULL, \`code\` varchar(100) NOT NULL, \`minPayments\` int NOT NULL, \`maxPayments\` int NOT NULL, \`minPaymentsElegibility\` int NOT NULL, \`maxPaymentsElegibility\` int NOT NULL, \`minAmount\` float NOT NULL, \`maxAmount\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`comentariosTasaAcordada\` varchar(45) NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaA1\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaA2\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaA3\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaB1\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaB2\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaB3\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaC1\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaC2\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaC3\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`paymentsPerStore\` ADD CONSTRAINT \`FK_3d3c770124af31a6d64355b6893\` FOREIGN KEY (\`storeId\`) REFERENCES \`sucursales\`(\`idSucursal\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE \`paymentsPerStore\` DROP FOREIGN KEY \`FK_3d3c770124af31a6d64355b6893\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaC3\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaC2\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaC1\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaB3\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaB2\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaB1\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaA3\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaA2\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaA1\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`comentariosTasaAcordada\``);
        await queryRunner.query(`DROP TABLE \`promotions\``);
        await queryRunner.query(`DROP TABLE \`paymentsPerStore\``);
    }

}
