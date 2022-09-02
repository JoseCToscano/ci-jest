import {MigrationInterface, QueryRunner} from "typeorm";

export class TablaStaticIndustriasLaborales1626205225885 implements MigrationInterface {
    name = 'TablaStaticIndustriasLaborales1626205225885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `staticIndustriasLaborales` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `industry` varchar(200) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query(`INSERT INTO staticIndustriasLaborales(industry) VALUES ('Administración Pública'),('Bienes Raíces'),('Call Center'), ('Centro de recreación Nocturno'), ('Construcción'), ('Consultoría de Negocios'), ('Contabilidad'), ('Editorial'), ('Educación'), ('Electricidad, Gas y/o Agua'), ('Entretenimiento & Cultural'), ('Finanzas'), ('Fuerzas Armadas'), ('Hotelería & Restaurantes'), ('Investigación & Desarrollo'), ('Manufactura'), ('Medios de Comunicación'), ('Minería'), ('Salud'), ('Seguridad Privada'), ('Seguros'), ('Servicios Computacionales'), ('Servicios de Limpieza'), ('Servicios Legales'), ('Software & Internet'), ('Telecomuniaciones'), ('Transportes'), ('Ventas al Público'), ('Otro');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `staticIndustriasLaborales`");
    }

}
