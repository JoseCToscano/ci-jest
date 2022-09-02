import {MigrationInterface, QueryRunner} from "typeorm";

export class commerceDashboardsValidated1640377612592 implements MigrationInterface {
    name = 'commerceDashboardsValidated1640377612592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`paymentOptions\` ADD \`validated\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`validated\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`comercios\` ADD \`validated\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`comercios\` DROP COLUMN \`validated\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`validated\``);
        await queryRunner.query(`ALTER TABLE \`paymentOptions\` DROP COLUMN \`validated\``);
    }

}
