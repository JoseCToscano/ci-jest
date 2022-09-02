import {MigrationInterface, QueryRunner} from "typeorm";

export class agregandoTipoTransaccionManual1601392057671 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO tiposTransacciones(id, clave, descripcion, tipoMovimientoId) VALUES (14,'Transacción manual', 'Transcción para realizar un ajuste manual', 5);`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM tiposTransacciones WHERE id = 14;`)
    }

}
