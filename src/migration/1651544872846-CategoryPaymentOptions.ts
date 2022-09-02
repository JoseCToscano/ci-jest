import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class CategoryPaymentOptions1651544872846 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'categoryPaymentOptions',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'categoryId',
						type: 'int',
					},
					{
						name: 'paymentOptionId',
						type: 'int',
					},
				],
			}),
			true
		);

		await queryRunner.createForeignKey(
			'categoryPaymentOptions',
			new TableForeignKey({
				columnNames: ['categoryId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'merchantCategories',
				onDelete: 'CASCADE',
			})
		);

		await queryRunner.createForeignKey(
			'categoryPaymentOptions',
			new TableForeignKey({
				columnNames: ['paymentOptionId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'paymentOptions',
				onDelete: 'CASCADE',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('categoryPaymentOptions', true, true);
	}
}
