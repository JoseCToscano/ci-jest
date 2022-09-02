import {MigrationInterface, QueryRunner} from "typeorm";

export class PagosCommentsLenghtIncrease1629571095569 implements MigrationInterface {
    name = 'PagosCommentsLenghtIncrease1629571095569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` modify `comentario`  varchar(1024) NOT NULL;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pagos` modify `comentario`  varchar(60) NOT NULL;");
    }
}
