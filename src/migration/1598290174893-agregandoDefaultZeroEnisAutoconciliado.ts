import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoDefaultZeroEnisAutoconciliado1598290174893 implements MigrationInterface {
    name = 'agregandoDefaultZeroEnisAutoconciliado1598290174893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` CHANGE `isAutoconciliado` `isAutoconciliado` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` CHANGE `isAutoconciliado` `isAutoconciliado` tinyint NOT NULL");
    }

}
