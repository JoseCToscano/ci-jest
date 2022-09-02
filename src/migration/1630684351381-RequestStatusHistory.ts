import {MigrationInterface, QueryRunner} from "typeorm";

export class RequestStatusHistory1630684351381 implements MigrationInterface {
    name = 'RequestStatusHistory1630684351381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`requestsStatusHistory\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`requestId\` int NOT NULL, \`nextStatus\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` ADD CONSTRAINT \`FK_57261beb0b5a5e2d7a0b98d60dc\` FOREIGN KEY (\`requestId\`) REFERENCES \`solicitudes\`(\`idSolicitud\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE \`requestsStatusHistory\` DROP FOREIGN KEY \`FK_57261beb0b5a5e2d7a0b98d60dc\``);
        await queryRunner.query(`DROP TABLE \`requestsStatusHistory\``);
    }

}
