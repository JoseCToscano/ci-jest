import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class PaymentOptionShiftTimeUnit1646169539670 implements MigrationInterface {
    name = 'PaymentOptionShiftTimeUnit1646169539670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('paymentOptions', 'firstPaymentMonthShift', 'firstPaymentShift');
        await queryRunner.addColumn('paymentOptions', new TableColumn({name: 'fixedDiscountAmount', type: 'double', isNullable: false, default: 0 }));
        await queryRunner.addColumn('paymentOptions', new TableColumn({name: 'shiftGranularity', type: 'varchar', length: '20', isNullable: false, default: `"MONTH"` }));
        await queryRunner.renameColumn('offeredPaymentOptions', 'firstPaymentMonthShift', 'firstPaymentShift');
        await queryRunner.addColumn('offeredPaymentOptions', new TableColumn({name: 'fixedDiscountAmount', type: 'double', isNullable: false, default: 0 }));
        await queryRunner.addColumn('offeredPaymentOptions', new TableColumn({name: 'shiftGranularity', type: 'varchar', length: '20', isNullable: false, default: `"MONTH"` }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('paymentOptions', 'firstPaymentShift', 'firstPaymentMonthShift');
        await queryRunner.dropColumn('paymentOptions', 'fixedDiscountAmount');
        await queryRunner.dropColumn('paymentOptions', 'shiftGranularity');
        await queryRunner.renameColumn('offeredPaymentOptions', 'firstPaymentShift', 'firstPaymentMonthShift');
        await queryRunner.dropColumn('offeredPaymentOptions', 'fixedDiscountAmount');
        await queryRunner.dropColumn('offeredPaymentOptions', 'shiftGranularity');

    }

}
