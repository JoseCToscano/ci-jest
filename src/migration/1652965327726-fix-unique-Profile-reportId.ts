import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixUniqueProfileReportId1652965327726
	implements MigrationInterface
{
	name = 'fixUniqueProfileReportId1652965327726';

	public async up(queryRunner: QueryRunner): Promise<void> {
		//fix reportID
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_e26abd2ba3424c6a383ee7ad257\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_e26abd2ba3424c6a383ee7ad25\` ON \`profile\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_e26abd2ba3424c6a383ee7ad257\` FOREIGN KEY (\`ccReportesId\`) REFERENCES \`ccReportes\`(\`idReporte\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		//fix reportId
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_e26abd2ba3424c6a383ee7ad257\``
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX \`REL_e26abd2ba3424c6a383ee7ad25\` ON \`profile\` (\`ccReportesId\`)`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_e26abd2ba3424c6a383ee7ad257\` FOREIGN KEY (\`ccReportesId\`) REFERENCES \`ccReportes\`(\`idReporte\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}
}
