import {MigrationInterface, QueryRunner} from "typeorm";

export class cambiandoTypeADoubleEnMontos1597949576913 implements MigrationInterface {
    name = 'cambiandoTypeADoubleEnMontos1597949576913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `saldoInsoluto` double NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `deudaCapital` double NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `deudaIntereses` double NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `comisiones` double NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `moratorios` double NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `saldoAFavor` double NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `saldoInsoluto` int NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `deudaCapital` int NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `deudaIntereses` int NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `comisiones` int NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `moratorios` int NOT NULL");
        await queryRunner.query("ALTER TABLE `transacciones` MODIFY `saldoAFavor` int NOT NULL");
    }

}
