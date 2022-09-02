import {MigrationInterface, QueryRunner} from "typeorm";

export class AdvisorFormInformationColumns1634404826352 implements MigrationInterface {
    name = 'AdvisorFormInformationColumns1634404826352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`helpFromAdvisor\` tinyint NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`advisorInformation\` varchar(200) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`advisorInformation\``);
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`helpFromAdvisor\``);
    }

}
