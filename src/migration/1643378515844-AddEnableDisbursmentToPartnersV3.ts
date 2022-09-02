import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddEnableDisbursmentToPartnersV31643378515844 implements MigrationInterface {
    name = 'AddEnableDisbursmentToPartnersV31643378515844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("partnersV3", new TableColumn({
            name: "hasDisbursmentDashboard",
            type: "boolean",
            default: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("partnersV3", "hasDisbursmentDashboard");
    }

}
