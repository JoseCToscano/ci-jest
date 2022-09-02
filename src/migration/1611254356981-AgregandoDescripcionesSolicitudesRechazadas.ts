import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoDescripcionesSolicitudesRechazadas1611254356981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE `staticEstadosSolicitudes` SET `nombreParaPartners` = 'Rechazado', `descripcion` = 'Cliente no autorizado para crédito y rechazado.' WHERE (`idEstadoSolicitud` = '5');");
        await queryRunner.query("UPDATE `staticEstadosSolicitudes` SET `nombreParaPartners` = 'Rechazado automáticamente', `descripcion` = 'Cliente no autorizado para crédito y rechazado automáticamente.' WHERE (`idEstadoSolicitud` = '13');");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE `staticEstadosSolicitudes` SET `nombreParaPartners` = '', `descripcion` = '' WHERE (`idEstadoSolicitud` = '5');");
        await queryRunner.query("UPDATE `staticEstadosSolicitudes` SET `nombreParaPartners` = '', `descripcion` = '' WHERE (`idEstadoSolicitud` = '13');");
    }

}
