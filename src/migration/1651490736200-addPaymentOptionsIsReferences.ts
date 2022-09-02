import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addPaymentOptionsIsReferences1651490736200
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'paymentOptions',
			new TableColumn({
				name: 'isReference',
				type: 'boolean',
				isNullable: false,
				default: false,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('paymentOptions', 'isReference');
	}
}
