import {MigrationInterface, QueryRunner} from "typeorm";

export class EmailNIP1634667077448 implements MigrationInterface {
    name = 'EmailNIP1634667077448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usersV3\` ADD \`emailNip\` varchar(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usersV3\` DROP COLUMN \`emailNip\``);
    }

}
