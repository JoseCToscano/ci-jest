import {MigrationInterface, QueryRunner} from "typeorm";

export class cambiandoLengthDeRFC1606331683421 implements MigrationInterface {
    name = 'cambiandoLengthDeRFC1606331683421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ccPersonas` modify `RFC` varchar(13) NULL;");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ccPersonas` modify `RFC` varchar(10) NULL;");
    }

}
