import {MigrationInterface, QueryRunner} from "typeorm";

export class EngancheAmount1645724730199 implements MigrationInterface {
    name = 'EngancheAmount1645724730199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offers\` ADD \`engancheAmount\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD \`engancheAmount\` double NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP COLUMN \`engancheAmount\``);
        await queryRunner.query(`ALTER TABLE \`offers\` DROP COLUMN \`engancheAmount\``);
    }

}
