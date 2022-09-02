import {MigrationInterface, QueryRunner} from "typeorm";

export class disbursementBankTransferSatusCancelIds1634750485617 implements MigrationInterface {
    name = 'disbursementBankTransferSatusCancelIds1634750485617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`staticBankTransferStatus\` (\`id\`,\`name\`, \`description\`) VALUES (4,'CANCELLED', 'Bank transfer was cancelled')`);
        await queryRunner.query(`INSERT INTO \`staticBankTransferStatus\` (\`id\`,\`name\`, \`description\`) VALUES (5,'REJECTED', 'Bank transfer was rejected')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM staticBankTransferStatus WHERE id = 4;`)
        await queryRunner.query(`DELETE FROM staticBankTransferStatus WHERE id = 5;`)
    }

}
