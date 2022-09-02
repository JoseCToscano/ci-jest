import {MigrationInterface, QueryRunner} from "typeorm";

export class automatedDelivery1645020519314 implements MigrationInterface {
    name = 'automatedDelivery1645020519314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`automatedDelivery\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`automatedDelivery\``);
    }

}
