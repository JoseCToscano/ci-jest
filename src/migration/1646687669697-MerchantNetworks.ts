import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class MerchantNetworks1646687669697 implements MigrationInterface {
	name = 'MerchantNetworks1646687669697';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'merchantNetworks',
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
						name: 'name',
						type: 'varchar',
						length: '50',
						isNullable: false,
						isUnique: true,
					},
					{ name: 'description', type: 'varchar', isNullable: true },
				],
				indices: [new TableIndex({ columnNames: ['name'], isUnique: true })],
				engine: 'InnoDB',
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('merchantNetworks', true, true, true);
	}
}
