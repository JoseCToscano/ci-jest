import {MigrationInterface, QueryRunner} from "typeorm";

export class IncreasingSizeOfLogsEntryColumnOfLogsTable1629134798522 implements MigrationInterface {
    name = 'IncreasingSizeOfLogsEntryColumnOfLogsTable1629134798522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `logs` modify `entry`  varchar(1064) NOT NULL;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `logs` modify `entry`  varchar(255) NOT NULL;");
    }
}
