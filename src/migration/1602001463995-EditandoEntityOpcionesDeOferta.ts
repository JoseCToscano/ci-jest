import {MigrationInterface, QueryRunner} from "typeorm";

export class EditandoEntityOpcionesDeOferta1602001463995 implements MigrationInterface {
    name = 'EditandoEntityOpcionesDeOferta1602001463995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` MODIFY fechaPrimerPago DATE NOT NULL;");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` MODIFY `fechaDeOferta` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` MODIFY quincenal tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` ADD isFirmadoNuevamente tinyint NOT NULL DEFAULT FALSE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` modify quincenal int NOT NULL");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` MODIFY `fechaDeOferta` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` MODIFY fechaPrimerPago tinytext NOT NULL;");
        await queryRunner.query("ALTER TABLE `opcionesDeOferta` DROP isFirmadoNuevamente;");
    }

}
