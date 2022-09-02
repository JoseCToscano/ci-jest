import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ContinuoRecurrentClientsTable1657738395175
	implements MigrationInterface
{
	name = 'ContinuoRecurrentClientsTable1657738395175';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'credicontinoRecurrentClients',
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
						isNullable: true,
						default: 'CURRENT_TIMESTAMP',
					},
					{
						name: 'isActive',
						type: 'boolean',
						default: true,
						isNullable: false,
					},
					{
						name: 'clientName',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'rfc',
						type: 'varchar',
						length: '13',
						isNullable: false,
					},
					{
						name: 'score',
						type: 'varchar',
						length: '5',
						isNullable: false,
					},
					{
						name: 'purchaseCount',
						type: 'int',
						isNullable: false,
						default: '0',
					},
				],
			}),
			true,
			true,
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(
			'credicontinoRecurrentClients',
			true,
			true,
			true
		);
	}
}
