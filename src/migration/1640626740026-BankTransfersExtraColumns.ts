import {MigrationInterface, QueryRunner} from "typeorm";

export class BankTransfersExtraColumns1640626740026 implements MigrationInterface {
    name = 'BankTransfersExtraColumns1640626740026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE bankTransfers ADD paymentConcept varchar(60) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD beneficiaryAccount varchar(60) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD beneficiaryName varchar(120) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD bankingInstitutionCode varchar(4) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD bankingInstitutionName varchar(120) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD beneficiaryCURPRFC varchar(18) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD digitalStamp varchar(45) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD certificateSeries varchar(45) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN certificateSeries`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN digitalStamp`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN beneficiaryCURPRFC`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN bankingInstitutionName`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN bankingInstitutionCode`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN beneficiaryName`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN beneficiaryAccount`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN paymentConcept`);
    }

}
