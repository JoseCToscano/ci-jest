import {MigrationInterface, QueryRunner} from "typeorm";

export class RutaVarchar1639787539140 implements MigrationInterface {
    name = 'RutaVarchar1639787539140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rutas\` MODIFY \`ruta\` varchar(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rutas\` MODIFY \`ruta\` varchar(45) NOT NULL`);
    }

}
