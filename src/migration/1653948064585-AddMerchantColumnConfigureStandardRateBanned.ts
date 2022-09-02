import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddMerchantColumnConfigureStandardRateBanned1653948064585
	implements MigrationInterface
{
	name = 'AddMerchantColumnConfigureStandardRateBanned1653948064585';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'comercios',
			new TableColumn({
				name: 'configureStandardRateBanned',
				type: 'boolean',
				default: false,
				isNullable: false,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('comercios', 'configureStandardRateBanned');
	}
}
