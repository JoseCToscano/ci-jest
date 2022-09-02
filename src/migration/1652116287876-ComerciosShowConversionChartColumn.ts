import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ComerciosShowConversionChartColumn1652116287876
	implements MigrationInterface
{
	name = 'ComerciosShowConversionChartColumn1652116287876';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'comercios',
			new TableColumn({
				name: 'showConversionChart',
				type: 'boolean',
				default: false,
				isNullable: false,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('comercios', 'showConversionChart');
	}
}
