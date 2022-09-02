import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from 'typeorm';

export class CreateAutomatedRulesComercios1643997516899
	implements MigrationInterface
{
	name = 'CreateAutomatedRulesComercios1643997516899';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'automatedRuleComercio',
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
						name: 'idComercio',
						type: 'int',
						isNullable: false,
					},
				],
			}),
			true,
			true,
			true
		);

		const foreignKeyAutomated = new TableForeignKey({
			columnNames: ['idComercio'],
			referencedColumnNames: ['idComercio'],
			referencedTableName: 'comercios',
			onDelete: 'CASCADE',
		});
		await queryRunner.createForeignKey(
			'automatedRuleComercio',
			foreignKeyAutomated
		);

		const foreignKeyComercio = new TableForeignKey({
			columnNames: ['automatedRuleId'],
			referencedColumnNames: ['id'],
			referencedTableName: 'automatedRule',
			onDelete: 'CASCADE',
		});
		await queryRunner.createForeignKey(
			'automatedRuleComercio',
			foreignKeyComercio
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('automatedRuleComercio', true, true, true);
	}
}
