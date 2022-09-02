import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class CanBeAutomatedDesicionTable1643997126666
	implements MigrationInterface
{
	name = 'CanBeAutomatedDesicionTable1643997126666';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'automatedDesicion',
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
						name: 'automatedRuleId',
						type: 'int',
						isNullable: false,
					},
					{
						name: 'result',
						type: 'boolean',
						default: false,
						isNullable: false,
					},
					{
						name: 'usesScore',
						type: 'boolean',
						default: false,
						isNullable: false,
					},
					{
						name: 'scoreBottom',
						type: 'float',
						isNullable: true,
					},
					{
						name: 'scoreTop',
						type: 'float',
						isNullable: true,
					},
					{
						name: 'usesRisk',
						type: 'boolean',
						default: false,
						isNullable: false,
					},
					{
						name: 'riskBottom',
						type: 'int',
						width: 1,
						isNullable: true,
					},
					{
						name: 'riskTop',
						type: 'int',
						width: 1,
						isNullable: true,
					},
					{
						name: 'usesAmount',
						type: 'boolean',
						default: false,
						isNullable: false,
					},
					{
						name: 'amountBottom',
						type: 'double',
						isNullable: true,
					},
					{
						name: 'amountTop',
						type: 'double',
						isNullable: true,
					},
					{
						name: 'reason',
						type: 'TEXT',
						isNullable: true,
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

		const foreignKey = new TableForeignKey({
			columnNames: ['automatedRuleId'],
			referencedColumnNames: ['id'],
			referencedTableName: 'automatedRule',
			onDelete: 'CASCADE',
		});
		await queryRunner.createForeignKey('automatedDesicion', foreignKey);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('automatedDesicion', true, true, true);
	}
}
