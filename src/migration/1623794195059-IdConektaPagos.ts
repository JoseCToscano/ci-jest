import {MigrationInterface, QueryRunner} from "typeorm";

export class IdConektaPagos1623794195059 implements MigrationInterface {
    name = 'IdConektaPagos1623794195059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` ADD `idConekta` varchar(60) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` DROP COLUMN `idConekta`");
    }

}
