import {MigrationInterface, QueryRunner} from "typeorm";

export class BreachNameDetailsNullTrue1607026876464 implements MigrationInterface {
    name = 'BreachNameDetailsNullTrue1607026876464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `seonBreachSpecificDetails` CHANGE `name` `name` varchar(256) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `seonBreachSpecificDetails` CHANGE `name` `name` varchar(256) NOT NULL");
    }

}
