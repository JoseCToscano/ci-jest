import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreditHasDebtReleaseColumn1652477010374
	implements MigrationInterface
{
	name = 'CreditHasDebtReleaseColumn1652477010374';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'creditosV3',
			new TableColumn({
				name: 'hasDebtRelease',
				type: 'boolean',
				default: false,
				isNullable: false,
				isUnique: false,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('creditosV3', 'hasDebtRelease');
	}
}
