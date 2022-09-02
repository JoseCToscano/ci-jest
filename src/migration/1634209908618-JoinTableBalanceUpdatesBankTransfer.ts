import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinTableBalanceUpdatesBankTransfer1634209908618 implements MigrationInterface {
    name = 'JoinTableBalanceUpdatesBankTransfer1634209908618'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`balance_updates_bank_transfers_bank_transfers\` (\`balanceUpdatesId\` int NOT NULL, \`bankTransfersId\` int NOT NULL, INDEX \`IDX_c316b34b34d9f25d53fdb401fd\` (\`balanceUpdatesId\`), INDEX \`IDX_9455dd250353a115c6d3d06ee0\` (\`bankTransfersId\`), PRIMARY KEY (\`balanceUpdatesId\`, \`bankTransfersId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`balance_updates_bank_transfers_bank_transfers\` ADD CONSTRAINT \`FK_c316b34b34d9f25d53fdb401fd9\` FOREIGN KEY (\`balanceUpdatesId\`) REFERENCES \`balanceUpdates\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`balance_updates_bank_transfers_bank_transfers\` ADD CONSTRAINT \`FK_9455dd250353a115c6d3d06ee00\` FOREIGN KEY (\`bankTransfersId\`) REFERENCES \`bankTransfers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`balance_updates_bank_transfers_bank_transfers\` DROP FOREIGN KEY \`FK_9455dd250353a115c6d3d06ee00\``);
        await queryRunner.query(`ALTER TABLE \`balance_updates_bank_transfers_bank_transfers\` DROP FOREIGN KEY \`FK_c316b34b34d9f25d53fdb401fd9\``);
        await queryRunner.query(`DROP INDEX \`IDX_9455dd250353a115c6d3d06ee0\` ON \`balance_updates_bank_transfers_bank_transfers\``);
        await queryRunner.query(`DROP INDEX \`IDX_c316b34b34d9f25d53fdb401fd\` ON \`balance_updates_bank_transfers_bank_transfers\``);
        await queryRunner.query(`DROP TABLE \`balance_updates_bank_transfers_bank_transfers\``);
    }

}
