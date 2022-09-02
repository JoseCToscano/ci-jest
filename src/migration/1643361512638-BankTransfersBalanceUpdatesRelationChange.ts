import {MigrationInterface, QueryRunner} from "typeorm";

export class BankTransfersBalanceUpdatesRelationChange1643361512638 implements MigrationInterface {
    name = 'BankTransfersBalanceUpdatesRelationChange1643361512638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE balanceUpdates ADD bankTransferId int NULL`);
        await queryRunner.query(`ALTER TABLE balanceUpdates ADD CONSTRAINT FK_0831de2cdc612d5cb6c7e8511fb FOREIGN KEY (bankTransferId) REFERENCES bankTransfers(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE balanceUpdates DROP FOREIGN KEY FK_0831de2cdc612d5cb6c7e8511fb`);
        await queryRunner.query(`ALTER TABLE balanceUpdates DROP COLUMN bankTransferId`);
    }

}
