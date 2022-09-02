import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinTableGruposAdmin1598288492410 implements MigrationInterface {
    name = 'JoinTableGruposAdmin1598288492410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `grupos_admin_rutas_permitidas_rutas` (`gruposAdminId` int NOT NULL, `rutasId` int NOT NULL, INDEX `IDX_bd0a5be34081bee6f1071e79df` (`gruposAdminId`), INDEX `IDX_8be98b12111fc4cfbfbda7990f` (`rutasId`), PRIMARY KEY (`gruposAdminId`, `rutasId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `grupos_admin_rutas_permitidas_rutas` ADD CONSTRAINT `FK_bd0a5be34081bee6f1071e79dfc` FOREIGN KEY (`gruposAdminId`) REFERENCES `gruposAdmin`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `grupos_admin_rutas_permitidas_rutas` ADD CONSTRAINT `FK_8be98b12111fc4cfbfbda7990f3` FOREIGN KEY (`rutasId`) REFERENCES `rutas`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `grupos_admin_rutas_permitidas_rutas` DROP FOREIGN KEY `FK_8be98b12111fc4cfbfbda7990f3`");
        await queryRunner.query("ALTER TABLE `grupos_admin_rutas_permitidas_rutas` DROP FOREIGN KEY `FK_bd0a5be34081bee6f1071e79dfc`");
        await queryRunner.query("DROP INDEX `IDX_8be98b12111fc4cfbfbda7990f` ON `grupos_admin_rutas_permitidas_rutas`");
        await queryRunner.query("DROP INDEX `IDX_bd0a5be34081bee6f1071e79df` ON `grupos_admin_rutas_permitidas_rutas`");
        await queryRunner.query("DROP TABLE `grupos_admin_rutas_permitidas_rutas`");
    }

}
