import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnaCalledFromVB1621353775425 implements MigrationInterface {
    name = 'ColumnaCalledFromVB1621353775425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `llamadasVoiceBlasterRealizadas` ADD `calledFrom` varchar(15) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `llamadasVoiceBlasterRealizadas` DROP COLUMN `calledFrom`");
    }

}
