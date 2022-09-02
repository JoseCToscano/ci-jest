import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class PromotionBudgetContributionsTable1646157360093
	implements MigrationInterface
{
	name = 'PromotionBudgetContributionsTable1646157360093';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'promotionBudgetContributions',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isNullable: false,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'fechaCreacion',
						type: 'datetime',
						precision: 0,
						default: 'CURRENT_TIMESTAMP',
					},
					{
						name: 'isActive',
						type: 'boolean',
						default: true,
						isNullable: false,
					},
					{
						name: 'amount',
						type: 'double',
						isNullable: false,
					},
					{
						name: 'creditoId',
						type: 'int',
						isNullable: false,
					},
					{
						name: 'paymentOptionId',
						type: 'int',
						isNullable: false,
					},
				],
				indices: [
					{
						name: `IDX_PromotionBudgetContribution_Credito`,
						isUnique: true,
						columnNames: ['creditoId'],
					},
					{
						name: `IDX_PromotionBudgetContribution_PaymentOption`,
						isUnique: true,
						columnNames: ['paymentOptionId'],
					},
				],
			}),
			true,
			true,
			true
		);

		const foreignKeyCredito = new TableForeignKey({
			columnNames: ['creditoId'],
			referencedColumnNames: ['id'],
			referencedTableName: 'creditosV3',
		});
		await queryRunner.createForeignKey(
			'promotionBudgetContributions',
			foreignKeyCredito
		);

		const foreignKeyPaymentOption = new TableForeignKey({
			columnNames: ['paymentOptionId'],
			referencedColumnNames: ['id'],
			referencedTableName: 'paymentOptions',
			name: 'FK_3f5f20132497da36fa8b8dcbf7a',
		});
		await queryRunner.createForeignKey(
			'promotionBudgetContributions',
			foreignKeyPaymentOption
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(
			'promotionBudgetContributions',
			true,
			true,
			true
		);
	}
}
