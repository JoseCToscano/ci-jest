import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoColumnisConciliado1598368096402 implements MigrationInterface {
    name = 'agregandoColumnisConciliado1598368096402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` ADD `isConciliado` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` DROP COLUMN `isConciliado`");
    }

}
