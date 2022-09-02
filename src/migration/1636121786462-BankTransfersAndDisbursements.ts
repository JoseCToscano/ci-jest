import {MigrationInterface, QueryRunner} from "typeorm";

export class BankTransfersAndDisbursements1636121786462 implements MigrationInterface {
    name = 'BankTransfersAndDisbursements1636121786462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`disbursements\` ADD \`bankTransferId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`disbursements\` ADD UNIQUE INDEX \`IDX_28165f960d4ce421e0cd74aaf7\` (\`bankTransferId\`)`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`dispersionDate\` datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`stpStatus\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`liquidationTimestamp\` datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`devolutionTimestamp\` datetime(0) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_28165f960d4ce421e0cd74aaf7\` ON \`disbursements\` (\`bankTransferId\`)`);
        await queryRunner.query(`ALTER TABLE \`disbursements\` ADD CONSTRAINT \`FK_28165f960d4ce421e0cd74aaf78\` FOREIGN KEY (\`bankTransferId\`) REFERENCES \`bankTransfers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`disbursements\` DROP FOREIGN KEY \`FK_28165f960d4ce421e0cd74aaf78\``);
        await queryRunner.query(`DROP INDEX \`REL_28165f960d4ce421e0cd74aaf7\` ON \`disbursements\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`devolutionTimestamp\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`liquidationTimestamp\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`stpStatus\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`dispersionDate\``);
        await queryRunner.query(`ALTER TABLE \`disbursements\` DROP INDEX \`IDX_28165f960d4ce421e0cd74aaf7\``);
        await queryRunner.query(`ALTER TABLE \`disbursements\` DROP COLUMN \`bankTransferId\``);
    }

}
