import {MigrationInterface, QueryRunner} from "typeorm";

export class opcionesDeOfertaPromotions1634128580098 implements MigrationInterface {
    name = 'opcionesDeOfertaPromotions1634128580098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`commision\` float NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD \`promotionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` ADD CONSTRAINT \`FK_73c92eb094bea8223701aa510d8\` FOREIGN KEY (\`promotionId\`) REFERENCES \`promotions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP FOREIGN KEY \`FK_73c92eb094bea8223701aa510d8\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`promotionId\``);
        await queryRunner.query(`ALTER TABLE \`opcionesDeOferta\` DROP COLUMN \`commision\``);
    }

}
