import {MigrationInterface, QueryRunner} from "typeorm";

export class RutaVarchar1001640792501331 implements MigrationInterface {
    name = 'RutaVarchar1001640792501331'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE \`rutas\` MODIFY \`ruta\` varchar(100) NOT NULL`);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rutas\` MODIFY \`ruta\` varchar(45) NOT NULL`);

    }

}
