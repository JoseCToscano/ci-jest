import {MigrationInterface, QueryRunner} from "typeorm";

export class PaymentOptionSolicitudes1638289427096 implements MigrationInterface {
    name = 'PaymentOptionSolicitudes1638289427096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD \`paymentOptionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`solicitudes\` ADD CONSTRAINT \`FK_7982e421bdbe428d02b030903c4\` FOREIGN KEY (\`paymentOptionId\`) REFERENCES \`paymentOptions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP FOREIGN KEY \`FK_7982e421bdbe428d02b030903c4\``);
        await queryRunner.query(`ALTER TABLE \`solicitudes\` DROP COLUMN \`paymentOptionId\``);
    }

}
