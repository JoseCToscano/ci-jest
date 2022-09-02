import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class PromotionMerchantStoreRelation1651006065446
	implements MigrationInterface
{
	name = 'PromotionMerchantStoreRelation1651006065446';

	foreignKeyStoreId = new TableForeignKey({
		columnNames: ['storeId'],
		referencedColumnNames: ['idSucursal'],
		referencedTableName: 'sucursales',
	});

	foreignKeyMerchantId = new TableForeignKey({
		columnNames: ['merchantId'],
		referencedColumnNames: ['idComercio'],
		referencedTableName: 'comercios',
	});

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'storeId',
				type: 'int',
				isNullable: true,
			})
		);
		await queryRunner.addColumn(
			'promotions',
			new TableColumn({
				name: 'merchantId',
				type: 'int',
				isNullable: true,
			})
		);

		await queryRunner.createForeignKey('promotions', this.foreignKeyMerchantId);
		await queryRunner.createForeignKey('promotions', this.foreignKeyStoreId);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('promotions', this.foreignKeyStoreId);
		await queryRunner.dropForeignKey('promotions', this.foreignKeyMerchantId);
		await queryRunner.dropColumn('promotions', 'storeId');
		await queryRunner.dropColumn('promotions', 'merchantId');
	}
}
