import {MigrationInterface, QueryRunner} from "typeorm";

export class NewColumnsOpcionesDeOfertaByPlazo11635976080877 implements MigrationInterface {
    name = 'NewColumnsOpcionesDeOfertaByPlazo11635976080877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`tasaInteresAnual1\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`tasaInteresAnual2\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`interesesMoratorios1\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`interesesMoratorios2\` double NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` CHANGE \`commision\` \`commision\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`commision1\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`commision2\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`promotionId1\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`promotionId2\` int NULL`);
         await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD CONSTRAINT \`FK_f5fe2a90c9b4eccc04adfd55ad1\` FOREIGN KEY (\`promotionId1\`) REFERENCES \`promotions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
         await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD CONSTRAINT \`FK_704fca754d22ce76c3169477d0a\` FOREIGN KEY (\`promotionId2\`) REFERENCES \`promotions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP FOREIGN KEY \`FK_704fca754d22ce76c3169477d0a\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP FOREIGN KEY \`FK_f5fe2a90c9b4eccc04adfd55ad1\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP FOREIGN KEY \`FK_73c92eb094bea8223701aa510d8\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP FOREIGN KEY \`FK_3d4e9069b95c08221d247173c31\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`promotionId2\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`promotionId1\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`commision2\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`commision1\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`interesesMoratorios2\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`interesesMoratorios1\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`tasaInteresAnual2\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`tasaInteresAnual1\``);
    }

}
