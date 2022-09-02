import {MigrationInterface, QueryRunner} from "typeorm";

export class WebhookEventsWebhookEventsLogs1634858363889 implements MigrationInterface {
    name = 'WebhookEventsWebhookEventsLogs1634858363889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`webhookEvents\` (\`id\` int NOT NULL AUTO_INCREMENT, \`idComercio\` int NOT NULL, \`idSucursal\` int NOT NULL, \`idSolicitud\` int NOT NULL, \`idCredito\` int NULL, \`idOrden\` varchar(150) NULL, \`url\` varchar(150) NOT NULL, \`verb\` varchar(20) NOT NULL, \`payload\` text NOT NULL, \`status\` varchar(50) NOT NULL, \`responseData\` text NULL, \`responseCode\` int NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`retries\` int NOT NULL DEFAULT '4', \`executionDate\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`creationDate\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`nextExecution\` datetime(0) NULL, \`eventType\` varchar(50) NULL, \`eventSubType\` varchar(50) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`webhookEventsLogs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`responseData\` text NULL, \`responseCode\` int NULL, \`success\` tinyint NOT NULL, \`retryNumber\` int NOT NULL, \`webhookEventsId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE  \`webhookEventsLogs\` ADD CONSTRAINT \`FK_718685351fbe630e083e37c6dad\` FOREIGN KEY (\`webhookEventsId\`) REFERENCES \`webhookEvents\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`webhookEventsLogs\` DROP FOREIGN KEY \`FK_718685351fbe630e083e37c6dad\``);
        await queryRunner.query(`DROP TABLE \`webhookEventsLogs\``);
        await queryRunner.query(`DROP TABLE \`webhookEvents\``);
    }

}
