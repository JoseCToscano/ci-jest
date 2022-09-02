import {MigrationInterface, QueryRunner} from "typeorm";

export class StatusVisualizationName1642603018410 implements MigrationInterface {
    name = 'StatusVisualizationName1642603018410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE staticBalanceUpdateStatus ADD visualizationName varchar(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE staticBalanceUpdateTypes ADD visualizationName varchar(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE staticBankTransferStatus ADD visualizationName varchar(45) NOT NULL`);
        await queryRunner.query(`UPDATE staticBankTransferStatus SET visualizationName =  "Esperando confirmación" WHERE id = 1;`);
        await queryRunner.query(`UPDATE staticBankTransferStatus SET visualizationName =  "En tránsito" WHERE id = 2;`);
        await queryRunner.query(`UPDATE staticBankTransferStatus SET visualizationName =  "Aplicada" WHERE id = 3;`);
        await queryRunner.query(`UPDATE staticBankTransferStatus SET visualizationName =  "Cancelada" WHERE id = 4;`);
        await queryRunner.query(`UPDATE staticBankTransferStatus SET visualizationName =  "Rechazada" WHERE id = 5;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateStatus SET visualizationName =  "Pendiente" WHERE id = 1;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateStatus SET visualizationName =  "En tránsito" WHERE id = 2;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateStatus SET visualizationName =  "Aplicada" WHERE id = 3;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateTypes SET visualizationName =  "Abono" WHERE id = 1;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateTypes SET visualizationName =  "Desembolso" WHERE id = 2;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateTypes SET visualizationName =  "Cancelación de crédito" WHERE id = 3;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateTypes SET visualizationName =  "Ajuste" WHERE id = 4;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateTypes SET visualizationName =  "Ajuste con actualizaciones" WHERE id = 5;`);
        await queryRunner.query(`UPDATE staticBalanceUpdateTypes SET visualizationName =  "Cancelación de desembolso" WHERE id = 6;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE staticBankTransferStatus DROP COLUMN visualizationName`);
        await queryRunner.query(`ALTER TABLE staticBalanceUpdateTypes DROP COLUMN visualizationName`);
        await queryRunner.query(`ALTER TABLE staticBalanceUpdateStatus DROP COLUMN visualizationName`);
    }

}
