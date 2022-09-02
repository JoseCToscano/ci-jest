import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
	TableIndex,
} from 'typeorm';

export class ComercioMerchantNetworksJoinTable1646779006861
	implements MigrationInterface
{
	name = 'ComercioMerchantNetworksJoinTable1646779006861';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'merchant_networks_merchants_comercios',
				columns: [
					{
						name: 'merchantNetworksId',
						type: 'int',
						isNullable: false,
						isPrimary: true,
					},
					{
						name: 'comerciosIdComercio',
						type: 'int',
						isNullable: false,
						isPrimary: true,
					},
				],
				engine: 'InnoDB',
				indices: [
					new TableIndex({ columnNames: ['merchantNetworksId'] }),
					new TableIndex({ columnNames: ['comerciosIdComercio'] }),
				],
			})
		);

		const foreignKeyMerchantNetworkId = new TableForeignKey({
			columnNames: ['merchantNetworksId'],
			referencedTableName: 'merchantNetworks',
			referencedColumnNames: ['id'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryRunner.createForeignKey(
			'merchant_networks_merchants_comercios',
			foreignKeyMerchantNetworkId
		);
		const foreignKeyMerchantId = new TableForeignKey({
			columnNames: ['comerciosIdComercio'],
			referencedTableName: 'comercios',
			referencedColumnNames: ['idComercio'],
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		});
		await queryRunner.createForeignKey(
			'merchant_networks_merchants_comercios',
			foreignKeyMerchantId
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(
			'merchant_networks_merchants_comercios',
			true,
			true,
			true
		);
	}
}
