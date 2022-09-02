import {MigrationInterface, QueryRunner} from "typeorm";

export class AnalyticEventsEntity1637779879377 implements MigrationInterface {
    name = 'AnalyticEventsEntity1637779879377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`analyticEvents\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`event\` varchar(100) NOT NULL, \`idSolicitud\` int NULL, \`idUserV3\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`analyticEvents\` ADD CONSTRAINT \`FK_97a2f3971018b70f27ea582a11a\` FOREIGN KEY (\`idSolicitud\`) REFERENCES \`solicitudes\`(\`idSolicitud\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`analyticEvents\` ADD CONSTRAINT \`FK_f9cb95ac7ae1d4f1534c3b5dbd7\` FOREIGN KEY (\`idUserV3\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`analyticEvents\` DROP FOREIGN KEY \`FK_f9cb95ac7ae1d4f1534c3b5dbd7\``);
        await queryRunner.query(`ALTER TABLE \`analyticEvents\` DROP FOREIGN KEY \`FK_97a2f3971018b70f27ea582a11a\``);
        await queryRunner.query(`DROP TABLE \`analyticEvents\``);
    }
}
