import {MigrationInterface, QueryRunner} from "typeorm";

export class FlowVersions1632357314446 implements MigrationInterface {
    name = 'FlowVersions1632357314446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`flowVersion\` varchar(20) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`flowVersion\``);
    }

}
