import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialQueryParams1638504869635 implements MigrationInterface {
    name = 'InitialQueryParams1638504869635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`initialQueryParams\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`applicationId\` int NOT NULL, \`merchant\` tinyint NULL DEFAULT 0, \`store\` tinyint NULL DEFAULT 0, \`amount\` tinyint NULL DEFAULT 0, \`numberPayments\` tinyint NULL DEFAULT 0, UNIQUE INDEX \`IDX_c0278c94bf09a19ea24ca13a08\` (\`applicationId\`), UNIQUE INDEX \`REL_c0278c94bf09a19ea24ca13a08\` (\`applicationId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`initialQueryParams\` ADD CONSTRAINT \`FK_c0278c94bf09a19ea24ca13a082\` FOREIGN KEY (\`applicationId\`) REFERENCES \`solicitudes\`(\`idSolicitud\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initialQueryParams\` DROP FOREIGN KEY \`FK_c0278c94bf09a19ea24ca13a082\``);
        await queryRunner.query(`DROP INDEX \`REL_c0278c94bf09a19ea24ca13a08\` ON \`initialQueryParams\``);
        await queryRunner.query(`DROP INDEX \`IDX_c0278c94bf09a19ea24ca13a08\` ON \`initialQueryParams\``);
        await queryRunner.query(`DROP TABLE \`initialQueryParams\``);
    }
}
