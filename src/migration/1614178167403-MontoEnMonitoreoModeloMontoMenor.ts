import {MigrationInterface, QueryRunner} from "typeorm";

export class MontoEnMonitoreoModeloMontoMenor1614178167403 implements MigrationInterface {
    name = 'MontoEnMonitoreoModeloMontoMenor1614178167403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `monitoreoModeloMontoMenor` ADD `montoPreAprobadoModelo` int NULL");
        await queryRunner.query("ALTER TABLE `monitoreoModeloMontoMenor` ADD `montoPreAprobadoReal` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `monitoreoModeloMontoMenor` DROP COLUMN `montoPreAprobadoReal`");
        await queryRunner.query("ALTER TABLE `monitoreoModeloMontoMenor` DROP COLUMN `montoPreAprobadoModelo`");
    }

}
