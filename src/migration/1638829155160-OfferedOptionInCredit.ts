import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferedOptionInCredit1638829155160 implements MigrationInterface {
    name = 'OfferedOptionInCredit1638829155160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD \`idOfferedPaymentOption\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD UNIQUE INDEX \`IDX_59f95f81802d7d0450231830bb\` (\`idOfferedPaymentOption\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP INDEX \`IDX_59f95f81802d7d0450231830bb\``);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP COLUMN \`idOfferedPaymentOption\``);
    }

}
