import {MigrationInterface, QueryRunner} from "typeorm";

export class Whitelabel1633717576418 implements MigrationInterface {
    name = 'Whitelabel1633717576418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`whiteLabelOwner\` varchar(20) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`whiteLabelOwner\``);
    }

}
