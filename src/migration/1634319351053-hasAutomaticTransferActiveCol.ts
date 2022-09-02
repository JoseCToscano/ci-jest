import {MigrationInterface, QueryRunner} from "typeorm";

export class hasAutomaticTransferActiveCol1634319351053 implements MigrationInterface {
    name = 'hasAutomaticTransferActiveCol1634319351053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`hasAutomaticTransferActive\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`hasAutomaticTransferActive\``);
    }

}
