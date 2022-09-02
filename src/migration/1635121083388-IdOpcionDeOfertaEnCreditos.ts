import {MigrationInterface, QueryRunner} from "typeorm";

export class IdOpcionDeOfertaEnCreditos1635121083388 implements MigrationInterface {
    name = 'IdOpcionDeOfertaEnCreditos1635121083388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD \`idOpcionDeOferta\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD UNIQUE INDEX \`IDX_9b1b3763f5a0af4d0440a2f6e3\` (\`idOpcionDeOferta\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP INDEX \`IDX_9b1b3763f5a0af4d0440a2f6e3\``);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP COLUMN \`idOpcionDeOferta\``);
    }

}
