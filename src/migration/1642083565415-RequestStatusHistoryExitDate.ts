import {MigrationInterface, QueryRunner} from "typeorm";

export class RequestStatusHistoryExitDate1642083565415 implements MigrationInterface {
    name = 'RequestStatusHistoryExitDate1642083565415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` ADD \`exitDate\` datetime(0) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` DROP COLUMN \`exitDate\``);
    }

}
