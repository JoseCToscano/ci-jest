import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class PaymentOptionsBudgetCols1646156122150 implements MigrationInterface {
    name = 'PaymentOptionsBudgetCols1646156122150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("paymentOptions", new TableColumn({
            name: "discountAmountLimit",
            type: "double",
            isNullable: true
        }));
        await queryRunner.addColumn("paymentOptions", new TableColumn({
            name: "budgetLimit",
            type: "double",
            isNullable: true
        }));
        await queryRunner.addColumn("paymentOptions", new TableColumn({
            name: "isBudgetLimitExceeded",
            type: "boolean",
            isNullable: false,
            default: false
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("paymentOptions", "isBudgetLimitExceeded");
        await queryRunner.dropColumn("paymentOptions", "budgetLimit");
        await queryRunner.dropColumn("paymentOptions", "discountAmountLimit");
    }

}
