import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreditoPaymentOptionRelation1646158865442 implements MigrationInterface {
    name = 'CreditoPaymentOptionRelation1646158865442'

    foreignKeySelectedPaymentOption = new TableForeignKey({
        columnNames: ['selectedPaymentOptionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'paymentOptions',
    });

    foreignKeySelectedOffer = new TableForeignKey({
        columnNames: ['selectedOfferId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'offers',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("creditosV3", new TableColumn({
            name: "selectedPaymentOptionId",
            type: "int",
            isNullable: true
        }));
        await queryRunner.addColumn("creditosV3", new TableColumn({
            name: "selectedOfferId",
            type: "int",
            isNullable: true
        }));
        await queryRunner.createForeignKey(
          'creditosV3',
          this.foreignKeySelectedPaymentOption
        );
        await queryRunner.createForeignKey(
          'creditosV3',
          this.foreignKeySelectedOffer
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropForeignKey(
         'creditosV3',
         this.foreignKeySelectedPaymentOption)
        await queryRunner.dropForeignKey(
         'creditosV3',
         this.foreignKeySelectedOffer)
        await queryRunner.dropColumn('creditosV3', 'selectedPaymentOptionId')
    }

}
