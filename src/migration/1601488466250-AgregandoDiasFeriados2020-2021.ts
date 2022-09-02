import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoDiasFeriados202020211601488466250 implements MigrationInterface {
    name = 'AgregandoDiasFeriados202020211601488466250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `diasFeriados` ADD `descripcion` varchar(45) NOT NULL");
        await queryRunner.query("ALTER TABLE `diasFeriados` modify fecha DATE NOT NULL;");
        await queryRunner.query("INSERT INTO diasFeriados(fecha, descripcion) VALUES ('2020-11-16','Revolución Mexicana'),('2020-12-25', 'Festejo de Navidad'),('2021-01-01', 'Festejo de Año Nuevo'),('2021-02-01', 'Día de la Constitución Mexicana'),('2021-03-15', 'Natalicio de Benito Juárez'),('2021-05-01','Día del trabajo'),('2021-09-16','Independencia de México'),('2021-11-15', 'Revolución Mexicana'),('2021-12-25', 'Festejo de Navidad');")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `diasFeriados` modify fechaCobro DATETIME NOT NULL;");
        await queryRunner.query("ALTER TABLE `diasFeriados` DROP COLUMN `descripcion`");
    }

}
