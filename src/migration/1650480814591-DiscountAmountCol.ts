import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class DiscountAmountCol1650480814591 implements MigrationInterface {
	name = 'DiscountAmountCol1650480814591';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'creditosV3',
			new TableColumn({
				name: 'discountAmount',
				type: 'double',
				isNullable: true,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('creditosV3', 'discountAmount');
	}
}
