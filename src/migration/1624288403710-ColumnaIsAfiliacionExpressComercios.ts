import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnaIsAfiliacionExpressComercios1624288403710 implements MigrationInterface {
    name = 'ColumnaIsAfiliacionExpressComercios1624288403710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comercios` ADD `isAfiliacionExpress` tinyint NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comercios` DROP COLUMN `isAfiliacionExpress`");
    }
}
