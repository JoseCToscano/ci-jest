import {MigrationInterface, QueryRunner} from "typeorm";

export class automaticallyConfirmBankTransfers1636467914262 implements MigrationInterface {
    name = 'automaticallyConfirmBankTransfers1636467914262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`confirmBankTransfersAutomatically\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`confirmBankTransfersAutomatically\``);
    }

}
