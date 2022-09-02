import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserV3CreditOwner1653340996307 implements MigrationInterface {
	name = 'UserV3CreditOwner1653340996307';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`usersV3\` ADD \`creditOwnerId\` int NULL`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`usersV3\` DROP COLUMN \`creditOwnerId\``
		);
	}
}
