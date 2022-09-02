import {MigrationInterface, QueryRunner} from "typeorm";

export class IdentifiersCodeINInitalQueryParams1638556297529 implements MigrationInterface {
    name = 'IdentifiersCodeINInitalQueryParams1638556297529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initialQueryParams\` ADD \`identifierCode\` varchar(100) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initialQueryParams\` DROP COLUMN \`identifierCode\``);
    }

}
