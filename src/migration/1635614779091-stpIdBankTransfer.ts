import {MigrationInterface, QueryRunner} from "typeorm";

export class stpIdBankTransfer1635614779091 implements MigrationInterface {
    name = 'stpIdBankTransfer1635614779091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`stpTransferId\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`stpTransferId\``);
    }

}
