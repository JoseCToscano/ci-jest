import {MigrationInterface, QueryRunner} from "typeorm";

export class MontoCompra1646755541085 implements MigrationInterface {
    name = 'MontoCompra1646755541085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`historialCreditos\` ADD \`deudaEnganche\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`transacciones\` ADD \`deudaEnganche\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD \`montoCompra\` double NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP COLUMN \`montoCompra\``);
        await queryRunner.query(`ALTER TABLE \`transacciones\` DROP COLUMN \`deudaEnganche\``);
        await queryRunner.query(`ALTER TABLE \`historialCreditos\` DROP COLUMN \`deudaEnganche\``);
    }

}
