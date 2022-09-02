import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ComerciosCanApplicationsBeAutomatedColumn1644964570615 implements MigrationInterface {
    name = 'ComerciosCanApplicationsBeAutomatedColumn1644964570615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("comercios", new TableColumn({
            name: "canApplicationsBeAutomated",
            type: "boolean",
            default: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("comercios", "canApplicationsBeAutomated");

    }

}
