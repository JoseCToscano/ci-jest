import {MigrationInterface, QueryRunner} from "typeorm";

export class DigitalStampLength1643119595004 implements MigrationInterface {
    name = 'DigitalStampLength1643119595004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bankTransfers` MODIFY `digitalStamp` TEXT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bankTransfers` MODIFY `digitalStamp` varchar(45) NULL");
    }
}
