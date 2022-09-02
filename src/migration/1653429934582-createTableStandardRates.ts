import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableStandardRates1653429934582
	implements MigrationInterface
{
	name = 'createTableStandardRates1653429934582';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`defaultStandardRates\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`categoryId\` int NULL, \`industryId\` int NULL, \`a1\` double NULL, \`a2\` double NULL, \`a3\` double NULL, \`b1\` double NULL, \`b2\` double NULL, \`b3\` double NULL, \`c1\` double NULL, \`c2\` double NULL, \`c3\` double NULL, \`modificationDate\` datetime(0) NULL, \`modificationByuserId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE \`defaultStandardRates\``);
	}
}
