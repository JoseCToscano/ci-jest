import {MigrationInterface, QueryRunner} from "typeorm";

export class SolicitudIsFraud1637434072729 implements MigrationInterface {
    name = 'SolicitudIsFraud1637434072729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`isFraud\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`isFraud\``);
    }
}
