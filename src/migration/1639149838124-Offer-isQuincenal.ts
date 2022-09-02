import {MigrationInterface, QueryRunner} from "typeorm";

export class OfferIsQuincenal1639149838124 implements MigrationInterface {
    name = 'OfferIsQuincenal1639149838124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offers ADD isQuincenal tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE offers DROP COLUMN isQuincenal`);
    }

}
