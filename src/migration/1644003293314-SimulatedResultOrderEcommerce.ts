import {MigrationInterface, QueryRunner} from "typeorm";

export class SimulatedResultOrderEcommerce1644003293314 implements MigrationInterface {
    name = 'SimulatedResultOrderEcommerce1644003293314'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` ADD \`simulatedResult\` varchar(20) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ordenesEcommerce\` DROP COLUMN \`simulatedResult\``);
    }

}
