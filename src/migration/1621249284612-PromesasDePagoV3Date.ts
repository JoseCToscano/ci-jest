import {MigrationInterface, QueryRunner} from "typeorm";

export class PromesasDePagoV3Date1621249284612 implements MigrationInterface {
    name = 'PromesasDePagoV3Date1621249284612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promesasDePagoV3` MODIFY `fechaPagoEsperada` date NOT NULL ");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `promesasDePagoV3` MODIFY `fechaPagoEsperada` datetime(0) NOT NULL");
    }

}
