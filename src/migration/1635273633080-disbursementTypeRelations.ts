import {MigrationInterface, QueryRunner} from "typeorm";

export class disbursementTypeRelations1635273633080 implements MigrationInterface {
    name = 'disbursementTypeRelations1635273633080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`staticDisbursementsTypes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(45) NOT NULL, \`description\` varchar(300) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD \`disbursementTypeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`sucursales\` ADD CONSTRAINT \`FK_3724c72e97c593e1cf3c74cf4f2\` FOREIGN KEY (\`disbursementTypeId\`) REFERENCES \`staticDisbursementsTypes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);

        await queryRunner.query(`INSERT INTO \`staticDisbursementsTypes\` (\`id\`,\`name\`, \`description\`) VALUES (1,'INSTANT', 'Disbursements will be triggered instanlty')`);
        await queryRunner.query(`INSERT INTO \`staticDisbursementsTypes\` (\`id\`,\`name\`, \`description\`) VALUES (2,'HOURLY', 'Disbursements will be triggered hourly')`);
        await queryRunner.query(`INSERT INTO \`staticDisbursementsTypes\` (\`id\`,\`name\`, \`description\`) VALUES (3,'DAILY', 'Disbursements will be triggered daily')`);
        await queryRunner.query(`INSERT INTO \`staticDisbursementsTypes\` (\`id\`,\`name\`, \`description\`) VALUES (4,'WEEKLY', 'Disbursements will be triggered weekly')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP FOREIGN KEY \`FK_3724c72e97c593e1cf3c74cf4f2\``);
        await queryRunner.query(`ALTER TABLE \`sucursales\` DROP COLUMN \`disbursementTypeId\``);
        await queryRunner.query(`DELETE FROM staticDisbursementsTypes`);
        await queryRunner.query(`DROP TABLE \`staticDisbursementsTypes\``);
    }

}
