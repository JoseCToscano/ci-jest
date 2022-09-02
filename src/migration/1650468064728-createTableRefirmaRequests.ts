import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableRefirmaRequests1650468064728
	implements MigrationInterface
{
	name = 'createTableRefirmaRequests1650468064728';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`reFirmaRequests\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`idComercio\` int NOT NULL, \`idSucursal\` int NOT NULL, \`idSolicitud\` int NOT NULL, \`idCredito\` int NULL, \`assessorName\` varchar(600) NULL, \`previousAmount\` double NOT NULL DEFAULT '0', \`newAmount\` double NOT NULL DEFAULT '0', \`applicationDate\` datetime(0) NOT NULL, \`applicationType\` varchar(50) NOT NULL, \`decisionType\` varchar(50) NOT NULL, \`status\` varchar(50) NOT NULL, \`approvalDate\` datetime(0) NULL, \`approvingUser\` int NULL, \`decisionReason\` varchar(600) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE \`reFirmaRequests\``);
	}
}
