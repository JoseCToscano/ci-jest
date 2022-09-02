import {MigrationInterface, QueryRunner} from "typeorm";

export class CreacionBlacklistReferencias1600981280187 implements MigrationInterface {
    name = 'CreacionBlacklistReferencias1600981280187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `blacklistReferencias` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `referencia` varchar(40) NOT NULL, `descripcion` varchar(100) NOT NULL, `tipo` enum ('OXXO_PAY', 'SPEI_PAY') NOT NULL, UNIQUE INDEX `IDX_f7373cfadb124a886ea500c42a` (`referencia`), UNIQUE INDEX `IDX_1b55a9ac0cc96a0593f1ddc588` (`descripcion`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query(`INSERT INTO blacklistReferencias(referencia, descripcion, tipo) VALUES ('646180111810203370', 'Referencia de Moni que se proporciono a clientes de solicitud 8515, 7473', 'SPEI_PAY'),('646180111810203723', 'Padre e hijo utilizan la misma referencia para solicitud 7337', 'SPEI_PAY');`)
        await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/pagos/fetchInfoReferencia', 'GET'), ('/v3/admin/pagos/updateReferencia', 'POST');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_1b55a9ac0cc96a0593f1ddc588` ON `blacklistReferencias`");
        await queryRunner.query("DROP INDEX `IDX_f7373cfadb124a886ea500c42a` ON `blacklistReferencias`");
        await queryRunner.query("DROP TABLE `blacklistReferencias`");
        await queryRunner.query("DELETE FROM blacklistReferencias WHERE blacklistReferencias.referencia = ('646180111810203370','646180111810203723');`");
        await queryRunner.query(`DELETE FROM rutas WHERE rutas.ruta IN ('/v3/admin/pagos/fetchInfoReferencia', '/v3/admin/pagos/updateReferencia');`);

    }
}
