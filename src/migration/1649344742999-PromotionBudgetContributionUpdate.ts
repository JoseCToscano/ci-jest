import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class PromotionBudgetContributionUpdate1649344742999
	implements MigrationInterface
{
	name = 'PromotionBudgetContributionUpdate1649344742999';

	foreignKeyCreditoId = new TableForeignKey({
		columnNames: ['creditoId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'creditosV3',
	});

	foreignKeyPaymentOption = new TableForeignKey({
		columnNames: ['paymentOptionId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'paymentOptions',
	});

	foreignKeyPromotionId = new TableForeignKey({
		columnNames: ['promotionId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'promotions',
	});

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'promotionBudgetContributions',
			new TableColumn({
				name: 'promotionId',
				type: 'int',
				isNullable: false,
			})
		);
		await queryRunner.createForeignKey(
			'promotionBudgetContributions',
			this.foreignKeyPromotionId
		);
		await queryRunner.dropForeignKey(
			'promotionBudgetContributions',
			'FK_3f5f20132497da36fa8b8dcbf7a'
		);
		await queryRunner.dropColumn(
			'promotionBudgetContributions',
			'paymentOptionId'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'promotionBudgetContributions',
			this.foreignKeyPromotionId
		);
		await queryRunner.dropColumn('promotionBudgetContributions', 'promotionId');
		await queryRunner.createForeignKey(
			'promotionBudgetContributions',
			this.foreignKeyPaymentOption
		);
	}
}
