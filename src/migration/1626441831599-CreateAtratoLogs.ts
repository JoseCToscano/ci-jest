import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAtratoLogs1626441831599 implements MigrationInterface {
    name = 'CreateAtratoLogs1626441831599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `atratologs` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `type` varchar(10) NOT NULL, `category` varchar(10) NOT NULL, `component` varchar(255) NOT NULL, `payload` text NULL, `result` text NULL, `usuario` varchar(10) NULL, `comercio` varchar(10) NULL, `sucursal` varchar(10) NULL, `extra` text NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `atratologs`");
    }

}
