import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class PromotionEntityUpdate1649342437402 implements MigrationInterface {
	name = 'PromotionEntityUpdate1649342437402';

	foreignKeyPromotionId = new TableForeignKey({
		columnNames: ['promotionId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'promotions',
	});

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('promotions', 'a1InterestRate');
		await queryRunner.dropColumn('promotions', 'a2InterestRate');
		await queryRunner.dropColumn('promotions', 'a3InterestRate');
		await queryRunner.dropColumn('promotions', 'b1InterestRate');
		await queryRunner.dropColumn('promotions', 'b2InterestRate');
		await queryRunner.dropColumn('promotions', 'b3InterestRate');
		await queryRunner.dropColumn('promotions', 'c1InterestRate');
		await queryRunner.dropColumn('promotions', 'c2InterestRate');
		await queryRunner.dropColumn('promotions', 'c3InterestRate');
		await queryRunner.dropColumn('promotions', 'code');
		await queryRunner.dropColumn('promotions', 'commerceId');
		await queryRunner.dropColumn('promotions', 'commision');
		await queryRunner.dropColumn('promotions', 'endingTime');
		await queryRunner.dropColumn('promotions', 'maxAmount');
		await queryRunner.dropColumn('promotions', 'maxPayments');
		await queryRunner.dropColumn('promotions', 'maxPaymentsElegibility');
		await queryRunner.dropColumn('promotions', 'minAmount');
		await queryRunner.dropColumn('promotions', 'minPayments');
		await queryRunner.dropColumn('promotions', 'minPaymentsElegibility');
		await queryRunner.dropColumn('promotions', 'priority');
		await queryRunner.dropColumn('promotions', 'startingTime');
		await queryRunner.dropColumn('promotions', 'storeId');
		await queryRunner.dropColumn('paymentOptions', 'budgetLimit');
		await queryRunner.dropColumn('paymentOptions', 'isBudgetLimitExceeded');
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'name',
				type: 'varchar',
				length: '45',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'description',
				type: 'varchar',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'budgetLimit', type: 'double', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'isBudgetLimitExceeded',
				type: 'boolean',
				isNullable: false,
				default: false,
			})
		);
		await queryRunner.addColumn(
			'paymentOptions',
			new TableColumn({ name: 'promotionId', type: 'int', isNullable: true })
		);

		await queryRunner.createForeignKey(
			'paymentOptions',
			this.foreignKeyPromotionId
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'paymentOptions',
			new TableColumn({
				name: 'isBudgetLimitExceeded',
				type: 'boolean',
				isNullable: false,
				default: false,
			})
		);
		await queryRunner.addColumn(
			'paymentOptions',
			new TableColumn({ name: 'budgetLimit', type: 'double', isNullable: true })
		);

		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'minPaymentsElegibility',
				type: 'int',
				isNullable: true,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'maxPaymentsElegibility',
				type: 'int',
				isNullable: true,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'priority', type: 'int', isNullable: false })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'minPayments', type: 'int', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'maxPayments', type: 'int', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'minAmount', type: 'float', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'maxAmount', type: 'float', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'startingTime',
				type: 'datetime',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'endingTime',
				type: 'datetime',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'commision',
				type: 'float',
				isNullable: false,
				default: 0,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'commerceId', type: 'int', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({ name: 'storeId', type: 'int', isNullable: true })
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'code',
				type: 'varchar',
				length: '100',
				isNullable: true,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'c3InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'c2InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'c1InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'b3InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'b2InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'b1InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'a3InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'a2InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'a1InterestRate',
				type: 'float',
				isNullable: false,
			})
		);
		await queryRunner.dropForeignKey(
			'paymentOptions',
			this.foreignKeyPromotionId
		);
		await queryRunner.dropColumn('paymentOptions', 'promotionId');
		await queryRunner.dropColumn('promotions', 'name');
		await queryRunner.dropColumn('promotions', 'isBudgetLimitExceeded');
		await queryRunner.dropColumn('promotions', 'description');
		await queryRunner.dropColumn('promotions', 'budgetLimit');
	}
}
