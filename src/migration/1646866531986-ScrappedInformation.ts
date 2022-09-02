import { MigrationInterface, QueryRunner } from 'typeorm';

export class ScrappedInformation1646866531986 implements MigrationInterface {
	name = 'ScrappedInformation1646866531986';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`scrappedInformation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product\` varchar(255) NOT NULL, \`amount\` float NOT NULL, \`price\` float NOT NULL, \`sku\` varchar(255) NULL, \`category\` varchar(255) NULL, \`description\` text NULL, \`image\` varchar(255) NULL, \`type\` varchar(255) NULL, \`extra\` text NULL, \`idSolicitud\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`scrappedInformation\` ADD CONSTRAINT \`FK_4ca339137339656cfcf9d63d3d3\` FOREIGN KEY (\`idSolicitud\`) REFERENCES \`solicitudes\`(\`idSolicitud\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`scrappedInformation\` DROP FOREIGN KEY \`FK_4ca339137339656cfcf9d63d3d3\``
		);
		await queryRunner.query(`DROP TABLE \`scrappedInformation\``);
	}
}
