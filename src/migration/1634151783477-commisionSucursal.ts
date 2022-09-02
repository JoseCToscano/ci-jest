import {MigrationInterface, QueryRunner} from "typeorm";

export class commisionSucursal1634151783477 implements MigrationInterface {
    name = 'commisionSucursal1634151783477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`commision\` float NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`commision\``);
    }

}
