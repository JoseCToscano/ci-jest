 import {MigrationInterface, QueryRunner} from "typeorm";

export class TestEntities1604344969803 implements MigrationInterface {
    name = 'TestEntities1604344969803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV === "test") {
            await queryRunner.query("CREATE TABLE `entityTest5` (`idEntity` int NOT NULL AUTO_INCREMENT, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, `parentId` int NULL, UNIQUE INDEX `IDX_78e6a362f80e4fb3fce8649739` (`entityNumber`), UNIQUE INDEX `IDX_ac33ae8a6adfeb5b6d755c93d8` (`entityName`), PRIMARY KEY (`idEntity`)) ENGINE=InnoDB");
            await queryRunner.query('CREATE TABLE `entityTest2` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, `parentId` int NULL, UNIQUE INDEX `IDX_47bcb5f551b181e99417badb45` (`entityNumber`), UNIQUE INDEX `IDX_3568f9bac36c558be51710f94a` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
            await queryRunner.query('CREATE TABLE `entityTest4` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, UNIQUE INDEX `IDX_95d30ccd6b1f21687d87cf8ece` (`entityNumber`), UNIQUE INDEX `IDX_f317651eaa0f7efa244654de76` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
            await queryRunner.query('CREATE TABLE `entityTest3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, UNIQUE INDEX `IDX_95d30ccd6b1f21687d87cf8ece` (`entityNumber`), UNIQUE INDEX `IDX_f317651eaa0f7efa244654de76` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
            await queryRunner.query('CREATE TABLE `entityTest1` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, `parentId` int NULL, UNIQUE INDEX `IDX_d6483a4314f88388e026d86f53` (`entityNumber`), UNIQUE INDEX `IDX_c7d58a067c44ea0c89817cd0f5` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
            await queryRunner.query("ALTER TABLE `entityTest5` ADD CONSTRAINT `FK_828d520b9553af158f6e45b8d8a` FOREIGN KEY (`parentId`) REFERENCES `entityTest3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            await queryRunner.query('ALTER TABLE `entityTest2` ADD CONSTRAINT `FK_0f7a7d37b371468ef7cc7c4ca8a` FOREIGN KEY (`parentId`) REFERENCES `entityTest1`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
            await queryRunner.query('ALTER TABLE `entityTest1` ADD CONSTRAINT `FK_9f788c6fb4ce819f0e7de07570b` FOREIGN KEY (`parentId`) REFERENCES `entityTest3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `entityTest5` DROP FOREIGN KEY `FK_828d520b9553af158f6e45b8d8a`");
        await queryRunner.query("DROP INDEX `IDX_ac33ae8a6adfeb5b6d755c93d8` ON `entityTest5`");
        await queryRunner.query("DROP INDEX `IDX_78e6a362f80e4fb3fce8649739` ON `entityTest5`");
        await queryRunner.query("DROP TABLE `entityTest5`");
        await queryRunner.query("ALTER TABLE `entityTest1` DROP FOREIGN KEY `FK_9f788c6fb4ce819f0e7de07570b`");
        await queryRunner.query("ALTER TABLE `entityTest2` DROP FOREIGN KEY `FK_0f7a7d37b371468ef7cc7c4ca8a`");
        await queryRunner.query("DROP INDEX `IDX_c7d58a067c44ea0c89817cd0f5` ON `entityTest1`");
        await queryRunner.query("DROP INDEX `IDX_d6483a4314f88388e026d86f53` ON `entityTest1`");
        await queryRunner.query("DROP TABLE `entityTest1`");
        await queryRunner.query("DROP INDEX `IDX_f317651eaa0f7efa244654de76` ON `entityTest3`");
        await queryRunner.query("DROP INDEX `IDX_95d30ccd6b1f21687d87cf8ece` ON `entityTest3`");
        await queryRunner.query("DROP TABLE `entityTest3`");
        await queryRunner.query("DROP INDEX `IDX_3568f9bac36c558be51710f94a` ON `entityTest2`");
        await queryRunner.query("DROP INDEX `IDX_47bcb5f551b181e99417badb45` ON `entityTest2`");
        await queryRunner.query("DROP TABLE `entityTest2`");
        await queryRunner.query("DROP TABLE `entityTest4`");
    }

}
