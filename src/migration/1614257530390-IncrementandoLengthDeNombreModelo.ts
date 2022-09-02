import {MigrationInterface, QueryRunner} from "typeorm";

export class IncrementandoLengthDeNombreModelo1614257530390 implements MigrationInterface {
    name = 'IncrementandoLengthDeNombreModelo1614257530390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `resultadosPreAprobacion` MODIFY `nombreModelo` varchar(50) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `resultadosPreAprobacion` MODIFY `nombreModelo` varchar(25) NULL");
    }

}
