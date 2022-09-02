import {MigrationInterface, QueryRunner} from "typeorm";

export class columnaIsComercioVIP1609278680733 implements MigrationInterface {
    name = 'columnaIsComercioVIP1609278680733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comercios` ADD `isComercioVIP` tinyint NOT NULL DEFAULT '0'");
        await queryRunner.query("UPDATE`comercios` SET `isComercioVIP` = 1 WHERE nombre IN ( 'Moons', 'Wizz' )");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE`comercios` SET `isComercioVIP` = 0 WHERE nombre IN ( 'Moons', 'Wizz' )");
        await queryRunner.query("ALTER TABLE `comercios` DROP COLUMN `isComercioVIP`");
    }

}
