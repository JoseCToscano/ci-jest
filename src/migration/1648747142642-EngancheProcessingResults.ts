import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class EngancheProcessingResults1648747142642
	implements MigrationInterface
{
	name = 'EngancheProcessingResults1648747142642';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'engancheAutomationResults',
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
						name: 'applicationId',
						type: 'int',
						isNullable: false,
						isUnique: false,
					},
					{
						name: 'processEnabled',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'offerPresent',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'storeTypePresent',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'riskProfilePresent',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'eligibleAmountForRiskProfile',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'sufficientPaymentCapacity',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'storeIsNotBronze',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'approvedByNorma',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'approvedByKarla',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'ficoIsHighEnough',
						type: 'boolean',
						isNullable: true,
						isUnique: false,
						default: null,
					},
					{
						name: 'insight',
						type: 'varchar',
						isNullable: false,
						isUnique: false,
					},
				],
			}),
			true,
			true,
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('engancheAutomationResults', true, true, true);
	}
}
