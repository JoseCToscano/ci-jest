import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class addpaymentOptionToOfferPayment1648833661953
	implements MigrationInterface
{
	foreignKeySelectedPaymentOption = new TableForeignKey({
		columnNames: ['paymentOptionId'],
		referencedColumnNames: ['id'],
		referencedTableName: 'paymentOptions',
	});

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'offeredPaymentOptions',
			new TableColumn({
				name: 'paymentOptionId',
				type: 'int',
				isNullable: true,
			})
		);
		await queryRunner.createForeignKey(
			'offeredPaymentOptions',
			this.foreignKeySelectedPaymentOption
		);
		await queryRunner.addColumn(
			'offeredPaymentOptions',
			new TableColumn({
				name: 'discountAmountLimit',
				type: 'double',
				isNullable: true,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey(
			'offeredPaymentOptions',
			this.foreignKeySelectedPaymentOption
		);
		await queryRunner.dropColumn('offeredPaymentOptions', 'paymentOptionId');
		await queryRunner.dropColumn(
			'offeredPaymentOptions',
			'discountAmountLimit'
		);
	}
}
