import {MigrationInterface, QueryRunner} from "typeorm";

export class EntitiesForDisbursements1634204370696 implements MigrationInterface {
    name = 'EntitiesForDisbursements1634204370696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`staticBalanceUpdateStatus\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(45) NOT NULL, \`description\` varchar(300) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`balanceUpdateStatusRecords\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`balanceUpdateId\` int NOT NULL, \`nextStatus\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`staticBalanceUpdateTypes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(45) NOT NULL, \`description\` varchar(300) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`balanceUpdates\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`amount\` double NOT NULL, \`previousBalance\` double NOT NULL, \`actualBalance\` double NOT NULL, \`comments\` text NULL, \`storeId\` int NOT NULL, \`type\` int NOT NULL, \`status\` int NOT NULL, \`creditoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`staticBankTransferStatus\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(45) NOT NULL, \`description\` varchar(300) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bankTransfers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`amount\` double NOT NULL, \`status\` int NOT NULL, \`adminSenderId\` int NULL, \`storeId\` int NOT NULL, \`comments\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bankTransferStatusRecords\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`bankTransferId\` int NOT NULL, \`nextStatus\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdateStatusRecords\` ADD CONSTRAINT \`FK_f09af8585b6e405d4a3c339d6de\` FOREIGN KEY (\`balanceUpdateId\`) REFERENCES \`balanceUpdates\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdateStatusRecords\` ADD CONSTRAINT \`FK_f0514665da288c729a0b74fe985\` FOREIGN KEY (\`nextStatus\`) REFERENCES \`staticBalanceUpdateStatus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD CONSTRAINT \`FK_cf80268d024bb5d642f1b5b905f\` FOREIGN KEY (\`storeId\`) REFERENCES \`sucursales\`(\`idSucursal\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD CONSTRAINT \`FK_cc24407c6422ae61bd36c0f8b17\` FOREIGN KEY (\`type\`) REFERENCES \`staticBalanceUpdateTypes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD CONSTRAINT \`FK_8d126db79c4413894b922632c56\` FOREIGN KEY (\`status\`) REFERENCES \`staticBalanceUpdateStatus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD CONSTRAINT \`FK_7ee05ffc3f46b8279c324d11ed0\` FOREIGN KEY (\`creditoId\`) REFERENCES \`creditosV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD CONSTRAINT \`FK_105681e1c44fc05bfa4aadab072\` FOREIGN KEY (\`status\`) REFERENCES \`staticBankTransferStatus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD CONSTRAINT \`FK_b93feb5092b2f59b3468ac99a9d\` FOREIGN KEY (\`adminSenderId\`) REFERENCES \`adminsV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD CONSTRAINT \`FK_bb07987bc7fbda9ab14317df9a7\` FOREIGN KEY (\`storeId\`) REFERENCES \`sucursales\`(\`idSucursal\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bankTransferStatusRecords\` ADD CONSTRAINT \`FK_47d2eef654946ee19d86682363d\` FOREIGN KEY (\`bankTransferId\`) REFERENCES \`bankTransfers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bankTransferStatusRecords\` ADD CONSTRAINT \`FK_145c94cbb25036f3cc72fb4fda4\` FOREIGN KEY (\`nextStatus\`) REFERENCES \`staticBankTransferStatus\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransferStatusRecords\` DROP FOREIGN KEY \`FK_145c94cbb25036f3cc72fb4fda4\``);
        await queryRunner.query(`ALTER TABLE \`bankTransferStatusRecords\` DROP FOREIGN KEY \`FK_47d2eef654946ee19d86682363d\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP FOREIGN KEY \`FK_bb07987bc7fbda9ab14317df9a7\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP FOREIGN KEY \`FK_b93feb5092b2f59b3468ac99a9d\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP FOREIGN KEY \`FK_105681e1c44fc05bfa4aadab072\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP FOREIGN KEY \`FK_7ee05ffc3f46b8279c324d11ed0\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP FOREIGN KEY \`FK_8d126db79c4413894b922632c56\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP FOREIGN KEY \`FK_cc24407c6422ae61bd36c0f8b17\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP FOREIGN KEY \`FK_cf80268d024bb5d642f1b5b905f\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdateStatusRecords\` DROP FOREIGN KEY \`FK_f0514665da288c729a0b74fe985\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdateStatusRecords\` DROP FOREIGN KEY \`FK_f09af8585b6e405d4a3c339d6de\``);
        await queryRunner.query(`DROP TABLE \`bankTransferStatusRecords\``);
        await queryRunner.query(`DROP TABLE \`bankTransfers\``);
        await queryRunner.query(`DROP TABLE \`staticBankTransferStatus\``);
        await queryRunner.query(`DROP TABLE \`balanceUpdates\``);
        await queryRunner.query(`DROP TABLE \`staticBalanceUpdateTypes\``);
        await queryRunner.query(`DROP TABLE \`balanceUpdateStatusRecords\``);
        await queryRunner.query(`DROP TABLE \`staticBalanceUpdateStatus\``);
    }

}
