import {MigrationInterface, QueryRunner} from "typeorm";

export class BankTransferInstituionCodeLength1641496087979 implements MigrationInterface {
    name = 'BankTransferInstituionCodeLength1641496087979'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` CHANGE \`bankingInstitutionCode\` \`bankingInstitutionCode\` varchar(5) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`bankTransfers\` CHANGE \`bankingInstitutionCode\` \`bankingInstitutionCode\` varchar(4) NULL`);
    }

}
