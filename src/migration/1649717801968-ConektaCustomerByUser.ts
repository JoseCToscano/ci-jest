import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConektaCustomerByUserv31649717801968
	implements MigrationInterface
{
	name = 'ConektaCustomerByUserv31649717801968';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`conektaCustomers\` ADD UNIQUE INDEX \`IDX_2684c5ef1f907ca657535c8b66\` (\`userV3Id\`)`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`conektaCustomers\` DROP INDEX \`IDX_2684c5ef1f907ca657535c8b66\``
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaCustomers\` ADD \`applicationId\` int NOT NULL`
		);
	}
}
