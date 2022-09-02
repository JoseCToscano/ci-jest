import {MigrationInterface, QueryRunner} from "typeorm";

export class test1626875190471 implements MigrationInterface {
    name = 'test1626875190471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `userV3Id` int NULL");
        await queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_c597e16d9c96d54e876ae401ddc` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_c597e16d9c96d54e876ae401ddc`");
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `userV3Id`");
    }

}
