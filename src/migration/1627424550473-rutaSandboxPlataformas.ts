import {MigrationInterface, QueryRunner} from "typeorm";

export class rutaSandboxPlataformas1627424550473 implements MigrationInterface {
    name = 'rutaSandboxPlataformas1627424550473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/sandbox/plataforms', 'POST');`);
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/webhook', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/sandbox/plataforms');`);
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/webhook');`);
    }

}
