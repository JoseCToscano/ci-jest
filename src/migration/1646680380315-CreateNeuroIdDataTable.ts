import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateNeuroIdDataTable1646680380315 implements MigrationInterface {
    name = 'CreateNeuroIdDataTable1646680380315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`neuroIdData\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`applicationId\` int NOT NULL, \`funnel\` varchar(60) NULL, \`sessionCardinality\` int NULL, \`digitalIdentityScore\` double NULL, \`digitalIdentityVersion\` varchar(60) NULL, \`digitalIdentityLabel\` varchar(60) NULL, \`fraudRingScore\` tinyint NULL, \`fraudRingVersion\` varchar(60) NULL, \`fraudRingLabel\` varchar(60) NULL, \`siteId\` varchar(60) NULL, \`neuroIdDocVersion\` varchar(60) NULL, \`formVersion\` varchar(60) NULL, \`applicationStatus\` int NOT NULL DEFAULT '1', \`clientId\` varchar(60) NULL, \`neuroIdPageId\` varchar(60) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`neuroIdData\``);
    }

}
