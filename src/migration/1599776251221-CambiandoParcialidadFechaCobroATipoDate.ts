import {MigrationInterface, QueryRunner} from "typeorm";

export class CambiandoParcialidadFechaCobroATipoDate1599776251221 implements MigrationInterface {
    name = 'CambiandoParcialidadFechaCobroATipoDate1599776251221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE parcialidades modify fechaCobro DATE NOT NULL;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE parcialidades modify fechaCobro DATETIME NOT NULL;");
    }

}
