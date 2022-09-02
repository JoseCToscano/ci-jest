import {MigrationInterface, QueryRunner} from "typeorm";

export class CommisionsSolicitud1631625863305 implements MigrationInterface {
    name = 'CommisionsSolicitud1631625863305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`comision\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`comision\``);
    }

}
