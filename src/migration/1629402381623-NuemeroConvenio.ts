import {MigrationInterface, QueryRunner} from "typeorm";

export class NuemeroConvenio1629402381623 implements MigrationInterface {
    name = 'NuemeroConvenio1629402381623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE creditOwners ADD \`convenio\` varchar(60) NOT NULL`);
        await queryRunner.query(`UPDATE creditOwners SET creditOwners.convenio='1770659'  WHERE creditOwners.nombre='Atrato'`)
        await queryRunner.query(`UPDATE creditOwners SET creditOwners.convenio='001854992'  WHERE creditOwners.nombre='Architect'`)
        await queryRunner.query(`ALTER TABLE creditOwners ADD UNIQUE INDEX \`IDX_f21d93d636a9a3cf350d770773\` (\`convenio\`)`);
       }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE creditOwners DROP INDEX \`IDX_f21d93d636a9a3cf350d770773\``);
        await queryRunner.query(`ALTER TABLE creditOwners DROP COLUMN \`convenio\``);
    }

}
