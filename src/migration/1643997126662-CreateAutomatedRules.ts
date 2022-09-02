import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAutomatedRules1643997126662 implements MigrationInterface {
	name = 'CreateAutomatedRules1643997126662';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'automatedRule',
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
						name: 'name',
						type: 'varchar',
						isNullable: false,
					},
					{
						name: 'usesMerchant',
						type: 'boolean',
						default: false,
						isNullable: false,
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
				],
			}),
			true,
			true,
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('automatedRule', true, true, true);
	}
}
