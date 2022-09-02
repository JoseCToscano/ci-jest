import {MigrationInterface, QueryRunner} from "typeorm";

export class TablaStatusEcommerceyModifWebhooks1619549322298 implements MigrationInterface {
    name = 'TablaStatusEcommerceyModifWebhooks1619549322298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `statusEcommerce` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `plataform` varchar(100) NOT NULL, `tipo` varchar(100) NOT NULL, `status` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `webhooks` ADD `idStatusIncial` int NULL");
        await queryRunner.query("ALTER TABLE `webhooks` ADD `idStatusAprobado` int NULL");
        await queryRunner.query("ALTER TABLE `webhooks` ADD `idStatusCancelado` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `idStatusCancelado`");
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `idStatusAprobado`");
        await queryRunner.query("ALTER TABLE `webhooks` DROP COLUMN `idStatusIncial`");
        await queryRunner.query("DROP TABLE `statusEcommerce`");
    }
}
