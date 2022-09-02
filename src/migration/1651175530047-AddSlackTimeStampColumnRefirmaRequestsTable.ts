import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddSlackTimeStampColumnRefirmaRequestsTable1651175530047
	implements MigrationInterface
{
	name = 'AddSlackTimeStampColumnRefirmaRequestsTable1651175530047';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'reFirmaRequests',
			new TableColumn({
				name: 'slackTimeStamp',
				type: 'varchar',
				length: '20',
				isNullable: true,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('reFirmaRequests', 'slackTimeStamp');
	}
}
