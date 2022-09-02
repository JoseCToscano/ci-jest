import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCanBeAutomatedToSolicitudes1648579615411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('solicitudes', [
			new TableColumn({
				name: 'canBeAutomated',
				type: 'boolean',
				isNullable: true
			}),
		]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('solicitudes', 'canBeAutomated');
    }

}
