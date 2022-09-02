import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUsersV31626719479954 implements MigrationInterface {
    name = 'CreateTableUsersV31626719479954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usersV3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `email` varchar(200) NOT NULL, `telefono` varchar(50) NOT NULL, `password` varchar(200) NOT NULL, `nip` varchar(10) NOT NULL, `nombre` varchar(50) NULL, `segundoNombre` varchar(50) NULL, `apellidoPaterno` varchar(50) NULL, `apellidoMaterno` varchar(50) NULL, `curp` varchar(50) NULL, `token` varchar(100) NULL, `isTokenValid` tinyint NOT NULL DEFAULT 0, `nipRemainingAttempts` int NOT NULL DEFAULT 3, `isNipVerified` tinyint NOT NULL DEFAULT 0, `isEmailVerified` tinyint NOT NULL DEFAULT 0, UNIQUE INDEX `IDX_7687caaf029e0551fb4ec89960` (`email`), UNIQUE INDEX `IDX_41d01b0f825067ed74bec97b38` (`telefono`), UNIQUE INDEX `IDX_49ff6ae4b476021b5d7075c562` (`curp`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_49ff6ae4b476021b5d7075c562` ON `usersV3`");
        await queryRunner.query("DROP INDEX `IDX_41d01b0f825067ed74bec97b38` ON `usersV3`");
        await queryRunner.query("DROP INDEX `IDX_7687caaf029e0551fb4ec89960` ON `usersV3`");
        await queryRunner.query("DROP TABLE `usersV3`");
    }

}
