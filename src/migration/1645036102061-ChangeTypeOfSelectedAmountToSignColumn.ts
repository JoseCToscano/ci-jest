import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTypeOfSelectedAmountToSignColumn1645036102061 implements MigrationInterface {
    name = 'ChangeTypeOfSelectedAmountToSignColumn1645036102061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` CHANGE COLUMN \`selectedAmountToSign\` \`selectedAmountToSign\` DOUBLE NULL DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` CHANGE COLUMN \`selectedAmountToSign\` \`selectedAmountToSign\` INT NULL DEFAULT NULL `);
    }

}
