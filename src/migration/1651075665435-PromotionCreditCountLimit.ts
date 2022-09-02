import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class PromotionCreditCountLimit1651075665435
	implements MigrationInterface
{
	name = 'PromotionCreditCountLimit1651075665435';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'creditCountLimit',
				type: 'int',
				isNullable: true,
				isUnique: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'isCreditCountLimitExceeded',
				type: 'boolean',
				isNullable: false,
				isUnique: false,
				default: false,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('promotions', 'creditCountLimit');
		await queryRunner.dropColumn('promotions', 'isCreditCountLimitExceeded');
	}
}
