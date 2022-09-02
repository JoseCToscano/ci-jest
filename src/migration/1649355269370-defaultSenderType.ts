import { MigrationInterface, QueryRunner } from 'typeorm';

export class defaultSenderType1649355269370 implements MigrationInterface {
	name = 'defaultSenderType1649355269370';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`offers\` CHANGE \`offerSenderType\` \`offerSenderType\` int NOT NULL DEFAULT '1'`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`offers\` CHANGE \`offerSenderType\` \`offerSenderType\` int NOT NULL DEFAULT '0'`
		);
	}
}
