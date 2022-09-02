import {MigrationInterface, QueryRunner} from "typeorm";

export class cambiandoFechaConciliacionNull1597885805955 implements MigrationInterface {
    name = 'cambiandoFechaConciliacionNull1597885805955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` CHANGE `fechaConciliacion` `fechaConciliacion` datetime(0) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` CHANGE `fechaConciliacion` `fechaConciliacion` datetime(0) NOT NULL");
    }

}
