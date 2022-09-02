import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class SucursalesMockBankTransferDispatch1644863590118 implements MigrationInterface {
    name = 'SucursalesMockBankTransferDispatch1644863590118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("sucursales", new TableColumn({
            name: "mockBankTransferDispatch",
            type: "boolean",
            default: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("sucursales", "mockBankTransferDispatch");
    }

}
