import {MigrationInterface, QueryRunner} from "typeorm";

export class CreandoIdMatiVerificacion1606924332458 implements MigrationInterface {
    name = 'CreandoIdMatiVerificacion1606924332458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuarios` ADD `idVerificacionMati` varchar(50) NULL");
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/soporteMati/deshabilitarFlow', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuarios` DROP COLUMN `idVerificacionMati`");
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/soporteMati/deshabilitarFlow');`);
    }

}
