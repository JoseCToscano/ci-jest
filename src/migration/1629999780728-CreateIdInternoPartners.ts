import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateIdInternoPartners1629999780728 implements MigrationInterface {
    name = 'CreateIdInternoPartners1629999780728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD \`idInternoPartners\` varchar(50) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP COLUMN \`idInternoPartners\``);
    }

}
