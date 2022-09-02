import {MigrationInterface, QueryRunner} from "typeorm";

export class SelectedAmountToSign1644627902752 implements MigrationInterface {
    name = 'SelectedAmountToSign1644627902752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` ADD \`selectedAmountToSign\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` DROP COLUMN \`selectedAmountToSign\``);
    }

}
