import {MigrationInterface, QueryRunner} from "typeorm";

export class CreandoEntityWebhooks1613072995011 implements MigrationInterface {
    name = 'CreandoEntityWebhooks1613072995011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `webhooks` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idComercio` int NOT NULL, `idSucursal` int NOT NULL, `webhookUrl` varchar(600) NULL, `secretKey` varchar(600) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `webhooks`");
    }

}
