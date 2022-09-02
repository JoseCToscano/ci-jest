import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddShowReasonsRejectChartColumnToComercioTable1652736685843
	implements MigrationInterface
{
	name = 'AddShowReasonsRejectChartColumnToComercioTable1652736685843';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'comercios',
			new TableColumn({
				name: 'showReasonsRejectChart',
				type: 'boolean',
				default: false,
				isNullable: false,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('comercios', 'showReasonsRejectChart');
	}
}
