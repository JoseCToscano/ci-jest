import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditosEnPlanDeApoyo1602814199377 implements MigrationInterface {
    name = 'CreditosEnPlanDeApoyo1602814199377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE creditosV3 SET notificarUsuario=0 WHERE id IN (12,31,36,77,78,93,135,140,169,178,182,194,145,727,155,100,167,153,728,726,15,163,172,177,192,724,223,87,53,162,183,65,80,164,108,48,71,82,165,57,127,227,79,185,208,209,205,201,20,229,228,723,101,50,159,380,725,190,81,85,184);");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("UPDATE creditosV3 SET notificarUsuario=1 WHERE id IN (12,31,36,77,78,93,135,140,169,178,182,194,145,727,155,100,167,153,728,726,15,163,172,177,192,724,223,87,53,162,183,65,80,164,108,48,71,82,165,57,127,227,79,185,208,209,205,201,20,229,228,723,101,50,159,380,725,190,81,85,184);");
    }

}
