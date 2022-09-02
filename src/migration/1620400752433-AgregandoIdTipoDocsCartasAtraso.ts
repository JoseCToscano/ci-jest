import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoIdTipoDocsCartasAtraso1620400752433 implements MigrationInterface {
    name = 'AgregandoIdTipoDocsCartasAtraso1620400752433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO staticTiposDocumentos (idTipoDocumentos, tipo) VALUES (7, "cartaAtrasoDia45"), (8, "cartaAtrasoDia120"), (9, "cartaAtrasoDia180");`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM staticTiposDocumentos WHERE idTipoDocumentos IN (7, 8, 9);`);
    }

}
