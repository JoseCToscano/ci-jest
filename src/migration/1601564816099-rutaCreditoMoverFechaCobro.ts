import {MigrationInterface, QueryRunner} from "typeorm";

export class rutaCreditoMoverFechaCobro1601564816099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (process.env.NODE_ENV !== "test") {
            await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/creditos/moverFechaCobro', 'POST');`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/creditos/moverFechaCobro';`);
    }

}
