import {MigrationInterface, QueryRunner} from "typeorm";

export class StaticNoAplicaEntries1626356961733 implements MigrationInterface {
    name = 'StaticNoAplicaEntries1626356961733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO staticParaQuienProducto(idParaQuienProducto, paraQuienProducto) VALUES (7, 'No Aplica');")
        await queryRunner.query("INSERT INTO staticTiposIngresos(idTipoIngreso, tipoIngreso) VALUES (6, 'No Aplica');")
        await queryRunner.query("INSERT INTO staticTiposDomicilios(idTipoDomicilio, tipoDomicilio) VALUES (5, 'No Aplica');")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM staticParaQuienProducto WHERE staticParaQuienProducto.idParaQuienProducto = 7")
        await queryRunner.query("DELETE FROM staticTiposIngresos WHERE staticTiposIngresos.idTipoIngreso = 6")
        await queryRunner.query("DELETE FROM staticTiposDomicilios WHERE staticTiposDomicilios.idTipoDomicilio = 5")
    }
}
