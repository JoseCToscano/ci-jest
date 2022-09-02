import {MigrationInterface, QueryRunner} from "typeorm";

export class AdditionalInfo1639168159661 implements MigrationInterface {
    name = 'AdditionalInfo1639168159661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`additionalInfo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`applicationId\` int NOT NULL, \`fraudCall\` tinyint NOT NULL DEFAULT 0, \`facebook\` tinyint NOT NULL DEFAULT 0, \`otherEmail\` tinyint NOT NULL DEFAULT 0, \`otherPhone\` tinyint NOT NULL DEFAULT 0, \`data\` varchar(1000) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`additionalInfo\` ADD CONSTRAINT \`FK_55ea1bae22af397001364c5eeb3\` FOREIGN KEY (\`applicationId\`) REFERENCES \`solicitudes\`(\`idSolicitud\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`additionalInfo\` DROP FOREIGN KEY \`FK_55ea1bae22af397001364c5eeb3\``);
        await queryRunner.query(`DROP TABLE \`additionalInfo\``);
    }
}
