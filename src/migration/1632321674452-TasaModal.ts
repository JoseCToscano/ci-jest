import {MigrationInterface, QueryRunner} from "typeorm";

export class TasaModal1632321674452 implements MigrationInterface {
    name = 'TasaModal1632321674452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`tasaModal\` int NOT NULL DEFAULT '35'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`tasaModal\``);
    }

}
