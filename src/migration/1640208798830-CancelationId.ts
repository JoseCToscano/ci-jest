import {MigrationInterface, QueryRunner} from "typeorm";

export class CancelationId1640208798830 implements MigrationInterface {
    name = 'CancelationId1640208798830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` ADD \`cancellationId\` varchar(300) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` DROP COLUMN \`cancellationId\``);
    }

}
