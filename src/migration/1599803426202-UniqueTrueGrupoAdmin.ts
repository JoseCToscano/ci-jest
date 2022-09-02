import {MigrationInterface, QueryRunner} from "typeorm";

export class UniqueTrueGrupoAdmin1599803426202 implements MigrationInterface {
    name = 'UniqueTrueGrupoAdmin1599803426202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gruposAdmin` ADD UNIQUE INDEX `IDX_ecd569d1f6206bedf78e0368be` (`nombre`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `gruposAdmin` DROP INDEX `IDX_ecd569d1f6206bedf78e0368be`");
    }

}
