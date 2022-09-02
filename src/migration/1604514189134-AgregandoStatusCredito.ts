import {MigrationInterface, QueryRunner} from "typeorm";

export class AgregandoStatusCredito1604514189134 implements MigrationInterface {
    name = 'AgregandoStatusCredito1604514189134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` ADD `status` varchar(20) NOT NULL DEFAULT 'Vigente'");
        await queryRunner.query("UPDATE `creditosV3` SET `status`= 'Cerrado' WHERE isActive = 0;");
        await queryRunner.query("UPDATE `creditosV3` SET `isActive`= 1;");
        await queryRunner.query("UPDATE `creditosV3` SET `status`= 'Manual' WHERE id IN (12,31,36,77,78,93,135,140,169,178,182,194,145,727,155,100,167,153,728,726,15,163,172,177,192,724,223,87,53,162,183,65,80,164,108,48,71,82,165,57,127,227,79,185,208,209,205,201,20,229,228,723,101,50,159,380,725,190,81,85,184);");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `status`");
    }

}
