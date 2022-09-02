import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoColisPreAprobadoAutomatico1605891980188 implements MigrationInterface {
    name = 'agregandoColisPreAprobadoAutomatico1605891980188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` ADD `isPreAprobadoAutomatico` tinyint NOT NULL DEFAULT '0'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `isPreAprobadoAutomatico`");
    }
}
