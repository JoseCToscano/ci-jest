import {MigrationInterface, QueryRunner} from "typeorm";

export class EditBankTransfersCols1641477747822 implements MigrationInterface {
    name = 'EditBankTransfersCols1641477747822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`bankingInstitutionName\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`certificateSeries\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`nameCEP\` varchar(120) NULL`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`rfcCEP\` varchar(18) NULL`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`urlCEP\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`urlCEP\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`rfcCEP\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` DROP COLUMN \`nameCEP\``);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`certificateSeries\` varchar(45) NULL`);
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` ADD \`bankingInstitutionName\` varchar(120) NULL`);
    }

}
