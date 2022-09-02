import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreditOwnerRelationUserV31653434948557
	implements MigrationInterface
{
	name = 'CreditOwnerRelationUserV31653434948557';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`usersV3\` ADD CONSTRAINT \`FK_740ed8b52bc2e7e4aa47e3d7ae6\` FOREIGN KEY (\`creditOwnerId\`) REFERENCES \`creditOwners\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`usersV3\` DROP FOREIGN KEY \`FK_740ed8b52bc2e7e4aa47e3d7ae6\``
		);
	}
}
