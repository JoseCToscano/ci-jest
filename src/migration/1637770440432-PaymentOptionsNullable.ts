import {MigrationInterface, QueryRunner} from "typeorm";

export class PaymentOptionsNullable1637770440432 implements MigrationInterface {
    name = 'PaymentOptionsNullable1637770440432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE discountPecentage discountPecentage double NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE merchantCommission merchantCommission double NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE firstPaymentMonthShift firstPaymentMonthShift int NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE startingTime startingTime datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE endingTime endingTime datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE priority priority int NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE minAmount minAmount double NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE maxAmount maxAmount double NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE maxAmount maxAmount double NOT NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE minAmount minAmount double NOT NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE priority priority int NOT NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE endingTime endingTime datetime(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE startingTime startingTime datetime(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE firstPaymentMonthShift firstPaymentMonthShift int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE merchantCommission merchantCommission double NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE paymentOptions CHANGE discountPecentage discountPecentage double NOT NULL DEFAULT '0'`);
    }

}
