import {MigrationInterface, QueryRunner} from "typeorm";

export class StoreClabeAndBankIdColumns1635418379579 implements MigrationInterface {
    name = 'StoreClabeAndBankIdColumns1635418379579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`bankingInstitutions\` (\`id\` varchar(5) NOT NULL, \`name\` varchar(70) NOT NULL, UNIQUE INDEX \`IDX_b1965c757732127c1082653242\` (\`id\`), UNIQUE INDEX \`IDX_89332f2b4d1e7e64fa3e02abb6\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`clabe\` varchar(18) NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`bankinginstitutionId\` varchar(5) NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD CONSTRAINT \`FK_7d4a7f68af1d19f5715ec989a74\` FOREIGN KEY (\`bankinginstitutionId\`) REFERENCES \`bankingInstitutions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP FOREIGN KEY \`FK_7d4a7f68af1d19f5715ec989a74\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`bankinginstitutionId\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`clabe\``);
        await queryRunner.query(`DROP INDEX \`IDX_89332f2b4d1e7e64fa3e02abb6\` ON \`bankingInstitutions\``);
        await queryRunner.query(`DROP INDEX \`IDX_b1965c757732127c1082653242\` ON \`bankingInstitutions\``);
        await queryRunner.query(`DROP TABLE \`bankingInstitutions\``);
    }

}
