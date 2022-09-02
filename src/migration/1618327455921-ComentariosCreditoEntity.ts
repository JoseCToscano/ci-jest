import {MigrationInterface, QueryRunner} from "typeorm";

export class ComentariosCreditoEntity1618327455921 implements MigrationInterface {
    name = 'ComentariosCreditoEntity1618327455921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `comentariosCreditos` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `comentario` text NOT NULL, `creditoId` int NOT NULL, `adminId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `comentariosCreditos` ADD CONSTRAINT `FK_62a4beb971ac4000acef50661fa` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comentariosCreditos` ADD CONSTRAINT `FK_32642e354dce860948ed3af4194` FOREIGN KEY (`adminId`) REFERENCES `adminsV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/obtenerComentarios', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comentariosCreditos` DROP FOREIGN KEY `FK_32642e354dce860948ed3af4194`");
        await queryRunner.query("ALTER TABLE `comentariosCreditos` DROP FOREIGN KEY `FK_62a4beb971ac4000acef50661fa`");
        await queryRunner.query("DROP TABLE `comentariosCreditos`");
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/creditos/obtenerComentarios');`);
    }

}
