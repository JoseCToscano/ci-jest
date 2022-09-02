import {MigrationInterface, QueryRunner} from "typeorm";

export class CreditosSolicitudesUniqueFalse1640620666190 implements MigrationInterface {
    name = 'CreditosSolicitudesUniqueFalse1640620666190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a11d4125e2fe5f0f04fe03e809\` ON \`creditosV3\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a11d4125e2fe5f0f04fe03e809\` ON \`creditosV3\` (\`solicitud\`)`);
    }

}
