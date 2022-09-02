import {MigrationInterface, QueryRunner} from "typeorm";

export class ServicingChangeLogEntity1628596028310 implements MigrationInterface {
    name = 'ServicingChangeLogEntity1628596028310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `servicingChangeLog` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `changeType` varchar(45) NOT NULL, `objectType` varchar(45) NOT NULL, `referenceId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `servicingChangeLog`");
    }

}
