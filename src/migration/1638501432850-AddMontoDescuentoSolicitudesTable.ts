import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMontoDescuentoSolicitudesTable1638501432850 implements MigrationInterface {
    name = 'AddMontoDescuentoSolicitudesTable1638501432850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`montoDescuento\` double NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`montoDescuento\``);
    }
}
