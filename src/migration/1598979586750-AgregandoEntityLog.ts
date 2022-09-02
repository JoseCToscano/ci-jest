import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoEntityLog1598979586750 implements MigrationInterface {
    name = 'AgregandoEntityLog1598979586750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `logs` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entry` varchar(255) NOT NULL, `tipoLog` varchar(45) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `logs`");
    }

}
