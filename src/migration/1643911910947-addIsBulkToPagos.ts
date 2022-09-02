import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addIsBulkToPagos1643911910947 implements MigrationInterface {
    name = 'addIsBulkToPagos1643911910947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('pagos', new TableColumn({
            name: 'isBulk',
            type: 'boolean',
            default: false,
            isNullable: false,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('pagos', 'isBulk');
    }

}
