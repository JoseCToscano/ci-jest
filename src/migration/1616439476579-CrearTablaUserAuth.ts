import {MigrationInterface, QueryRunner} from "typeorm";

export class CrearTablaUserAuth1616439476579 implements MigrationInterface {
    name = 'CrearTablaUserAuth1616439476579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usuariosAuth` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idSolicitud` int NOT NULL, `password` varchar(200) NOT NULL, UNIQUE INDEX `IDX_0ef1dd382901ba50ee5a0a4e39` (`idSolicitud`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_0ef1dd382901ba50ee5a0a4e39` ON `usuariosAuth`");
        await queryRunner.query("DROP TABLE `usuariosAuth`");
    }
}
