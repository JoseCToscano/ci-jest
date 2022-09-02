import {MigrationInterface, QueryRunner} from "typeorm";

export class ValidateAllEntities1642002443156 implements MigrationInterface {
    name = 'ValidateAllEntities1642002443156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE comercios SET validated = TRUE WHERE idComercio > 0;`);
        await queryRunner.query(`UPDATE sucursales SET validated = TRUE WHERE idSucursal > 0;`);
        await queryRunner.query(`UPDATE paymentOptions SET validated = TRUE WHERE id > 0;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE comercios SET validated = FALSE WHERE idComercio > 0;`);
        await queryRunner.query(`UPDATE sucursales SET validated = FALSE WHERE idSucursal > 0;`);
        await queryRunner.query(`UPDATE paymentOptions SET validated = FALSE WHERE id > 0;`);
    }

}
