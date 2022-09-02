import {MigrationInterface, QueryRunner} from "typeorm";

export class BankTransferTrackingKey1640280736841 implements MigrationInterface {
    name = 'BankTransferTrackingKey1640280736841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE bankTransfers ADD trackingKey varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE bankTransfers ADD UNIQUE INDEX IDX_ecf517e20461e9abf581152eba (trackingKey)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE bankTransfers DROP INDEX IDX_ecf517e20461e9abf581152eba`);
        await queryRunner.query(`ALTER TABLE bankTransfers DROP COLUMN trackingKey`);
    }

}
