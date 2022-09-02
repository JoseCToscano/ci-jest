import {MigrationInterface, QueryRunner} from "typeorm";

export class OfertaConCreditOwner1627935853723 implements MigrationInterface {
    name = 'OfertaConCreditOwner1627935853723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` ADD `creditOwnerId` int NULL");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` ADD CONSTRAINT `FK_3d4e9069b95c08221d247173c31` FOREIGN KEY (`creditOwnerId`) REFERENCES `creditOwners`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` DROP FOREIGN KEY `FK_3d4e9069b95c08221d247173c31`");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` DROP COLUMN `creditOwnerId`");
    }

}
