import {MigrationInterface, QueryRunner} from "typeorm";

export class descripcionRegistroAutomaticoLength1622702254732 implements MigrationInterface {
    name = 'descripcionRegistroAutomaticoLength1622702254732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `registrosAccionesAutomaticas` MODIFY `descripcion` varchar(250) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `registrosAccionesAutomaticas` MODIFY `descripcion` varchar(45) NOT NULL");
    }

}
