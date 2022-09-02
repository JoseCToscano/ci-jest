import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyingRequestStatusHistory1639404582574 implements MigrationInterface {
    name = 'ModifyingRequestStatusHistory1639404582574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`applicationHistoryComments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`idRequestStatusHistory\` int NOT NULL, \`comment\` varchar(500) NOT NULL, \`type\` varchar(100) NOT NULL, \`credentialType\` varchar(100) NOT NULL, \`credentialVersion\` varchar(100) NOT NULL, \`credentialId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` CHANGE \`nextStatus\` \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` ADD \`previousStatus\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`applicationHistoryComments\` ADD CONSTRAINT \`FK_d4d2c62910a795157fa3d9f1455\` FOREIGN KEY (\`idRequestStatusHistory\`) REFERENCES \`requestsStatusHistory\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`applicationHistoryComments\` DROP FOREIGN KEY \`FK_d4d2c62910a795157fa3d9f1455\``);
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` DROP COLUMN \`previousStatus\``);
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` ADD \`nextStatus\` int NOT NULL`);
    }

}
