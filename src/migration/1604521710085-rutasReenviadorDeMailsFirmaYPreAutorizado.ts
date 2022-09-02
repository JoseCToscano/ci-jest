import {MigrationInterface, QueryRunner} from "typeorm";

export class rutasReenviadorDeMailsFirmaYPreAutorizado1604521710085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/reenviadorMails/firma', 'POST'), ('/v3/admin/reenviadorMails/firmaCyS', 'POST'), ('/v3/admin/reenviadorMails/preAprobado', 'POST'), ('/v3/admin/reenviadorMails/preAprobadoCyS', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/reenviadorMails/firma', '/v3/admin/reenviadorMails/firmaCyS', '/v3/admin/reenviadorMails/preAprobado', '/v3/admin/reenviadorMails/preAprobadoCyS');`);
    }

}
