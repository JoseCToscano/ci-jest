import { MigrationInterface, QueryRunner } from 'typeorm';

export class createWebhookFinancing1648584797701 implements MigrationInterface {
	name = 'createWebhookFinancing1648584797701';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`webhooksFinancing\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`idComercio\` int NOT NULL, \`idSucursal\` int NOT NULL, \`webhookUrl\` varchar(600) NULL, \`user\` varchar(600) NULL, \`password\` varchar(600) NULL, \`authenticationType\` varchar(100) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE \`webhooksFinancing\``);
	}
}
