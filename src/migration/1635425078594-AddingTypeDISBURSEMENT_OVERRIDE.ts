import {MigrationInterface, QueryRunner} from "typeorm";

export class AddingTypeDISBURSEMENTOVERRIDE1635425078594 implements MigrationInterface {
    name = 'AddingTypeDISBURSEMENTOVERRIDE1635425078594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO \`staticBalanceUpdateTypes\` (\`id\`,\`name\`, \`description\`) VALUES (6,'DISBURSEMENT_OVERRIDE', 'Overrides the ammounts addedd to the balance from another Disbursement')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM \`staticBalanceUpdateTypes\` WHERE \`id\` = 6`);
    }

}
