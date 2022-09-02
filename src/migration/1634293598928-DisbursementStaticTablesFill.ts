import {MigrationInterface, QueryRunner} from "typeorm";

export class DisbursementStaticTablesFill1634293598928 implements MigrationInterface {
    name = 'DisbursementStaticTablesFill1634293598928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`staticBankTransferStatus\` (\`id\`,\`name\`, \`description\`) VALUES (1,'WAITING_FOR_CONFIRMATION', 'Bank transfer is ready to be sent, but needs confirmation')`);
        await queryRunner.query(`INSERT INTO \`staticBankTransferStatus\` (\`id\`,\`name\`, \`description\`) VALUES (2,'IN_TRANSIT', 'Bank transfer was successfully sent, but not yet confirmed or received')`);
        await queryRunner.query(`INSERT INTO \`staticBankTransferStatus\` (\`id\`,\`name\`, \`description\`) VALUES (3,'APPLIED', 'Bank transfer was successfully sent and received')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateStatus\` (\`id\`,\`name\`, \`description\`) VALUES (1,'PENDING', 'Balance update is ready to be considered for a new Bank Transfer')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateStatus\` (\`id\`,\`name\`, \`description\`) VALUES (2,'IN_TRANSIT', 'Balance update has already been considered for a Bank Transfer pending to be confirmed')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateStatus\` (\`id\`,\`name\`, \`description\`) VALUES (3,'APPLIED', 'Balance update has been successfully considered for a confirmed Bank Transfered')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateTypes\` (\`id\`,\`name\`, \`description\`) VALUES (1,'CONTRIBUTION', 'Contribution to balance due to a new credit')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateTypes\` (\`id\`,\`name\`, \`description\`) VALUES (2,'DISBURSEMENT', 'Disbursement generated through the confirmation of a bank transfer')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateTypes\` (\`id\`,\`name\`, \`description\`) VALUES (3,'CREDIT_CANCELATION', 'Loads negative balance due to credit cancelation')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateTypes\` (\`id\`,\`name\`, \`description\`) VALUES (4,'ADJUSTMENT', 'Loads balance to be considered in the next bank transfer')`);
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateTypes\` (\`id\`,\`name\`, \`description\`) VALUES (5,'ADJUSTMENT_WITH_BALANCE_UPDATES', 'Loads applied balance that was manually transfered. Needs manual relation to other balance updates')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM staticBalanceUpdateStatus`);
        await queryRunner.query(`DELETE FROM staticBalanceUpdateTypes`);
        await queryRunner.query(`DELETE FROM staticBankTransferStatus`);
    }

}
