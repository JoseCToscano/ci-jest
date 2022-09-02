import {MigrationInterface, QueryRunner} from "typeorm";

export class profileDocsAndUser1650548818194 implements MigrationInterface {
    name = 'profileDocsAndUser1650548818194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profileDocuments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`documentTypeId\` int NOT NULL, \`s3Key\` varchar(300) NOT NULL, \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profileUserInfo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`genderId\` int NOT NULL, \`educationId\` int NOT NULL, \`civilStatusId\` int NOT NULL, \`birthDate\` date NOT NULL, \`altPhoneNumber\` varchar(20) NULL, \`economicDependents\` int NOT NULL, \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);

        await queryRunner.query(`ALTER TABLE \`profileDocuments\` ADD CONSTRAINT \`FK_ecc07288e660cfc5344a48aa002\` FOREIGN KEY (\`documentTypeId\`) REFERENCES \`staticTiposDocumentos\`(\`idTipoDocumentos\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` ADD CONSTRAINT \`FK_ba11659b3575f1196b77169d8c5\` FOREIGN KEY (\`genderId\`) REFERENCES \`staticGeneros\`(\`idGenero\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` ADD CONSTRAINT \`FK_b19f23887a0234cb069bb073766\` FOREIGN KEY (\`educationId\`) REFERENCES \`staticNivelesEstudios\`(\`idNivelEstudio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` ADD CONSTRAINT \`FK_4463bd0f2db91d1bbfbc1f9300e\` FOREIGN KEY (\`civilStatusId\`) REFERENCES \`staticEstadosCiviles\`(\`idEstadoCivil\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` DROP FOREIGN KEY \`FK_4463bd0f2db91d1bbfbc1f9300e\``);
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` DROP FOREIGN KEY \`FK_b19f23887a0234cb069bb073766\``);
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` DROP FOREIGN KEY \`FK_ba11659b3575f1196b77169d8c5\``);
        await queryRunner.query(`ALTER TABLE \`profileDocuments\` DROP FOREIGN KEY \`FK_ecc07288e660cfc5344a48aa002\``);

        await queryRunner.query(`DROP TABLE \`profileUserInfo\``);
        await queryRunner.query(`DROP TABLE \`profileDocuments\``);
    }

}
