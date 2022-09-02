import {MigrationInterface, QueryRunner} from "typeorm";

export class Au10tixImplementation1632328748041 implements MigrationInterface {
    name = 'Au10tixImplementation1632328748041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`au10tixResultRemark\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`idAu10tixResultData\` int NOT NULL, \`value\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`au10tixResultData\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`idMainAu10tix\` int NOT NULL, \`isPrimaryResult\` tinyint NOT NULL DEFAULT 0, \`completionStatus\` int NOT NULL, \`documentAuthenticity\` int NOT NULL, \`documentScope\` int NOT NULL, \`documentSidesCode\` int NOT NULL, \`primaryProcessingResult\` int NOT NULL, \`faceCompletionStatus\` int NULL, \`isDocumentExpired\` tinyint NULL, \`isDataExtracted\` tinyint NULL, \`overallQuality\` int NULL, \`sdrCompletionStatus\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`au10tix\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`idSolicitud\` int NOT NULL, \`au10tixId\` int NOT NULL, \`token\` varchar(100) NOT NULL, \`url\` varchar(500) NOT NULL, \`expiredAt\` datetime(0) NOT NULL, \`flowCompleted\` tinyint NULL DEFAULT 0, \`requestId\` varchar(100) NULL, \`result\` varchar(50) NULL, \`automaticResult\` varchar(50) NULL, \`documentType\` varchar(50) NULL, \`documentId\` varchar(100) NOT NULL, \`fullName\` varchar(100) NULL, \`curp\` varchar(50) NULL, \`livenessAttempts\` int NOT NULL, \`livenessCompletionStatus\` int NOT NULL, \`livenessProbability\` double NOT NULL, UNIQUE INDEX \`IDX_34280c4475eed7397c0d2301b5\` (\`au10tixId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`documentosRequeridos\` ADD \`isPostDecisionReviewRequired\` tinyint NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`au10tixResultRemark\` ADD CONSTRAINT \`FK_4ee48fd717d4421bfdb1479ec48\` FOREIGN KEY (\`idAu10tixResultData\`) REFERENCES \`au10tixResultData\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`au10tixResultData\` ADD CONSTRAINT \`FK_13f9cf75023ddc444638ffe6d0c\` FOREIGN KEY (\`idMainAu10tix\`) REFERENCES \`au10tix\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`au10tix\` ADD CONSTRAINT \`FK_2390fee2edf4b3007057c8bd027\` FOREIGN KEY (\`idSolicitud\`) REFERENCES \`solicitudes\`(\`idSolicitud\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`au10tix\` DROP FOREIGN KEY \`FK_2390fee2edf4b3007057c8bd027\``);
        await queryRunner.query(`ALTER TABLE \`au10tixResultData\` DROP FOREIGN KEY \`FK_13f9cf75023ddc444638ffe6d0c\``);
        await queryRunner.query(`ALTER TABLE \`au10tixResultRemark\` DROP FOREIGN KEY \`FK_4ee48fd717d4421bfdb1479ec48\``);
        await queryRunner.query(`ALTER TABLE \`documentosRequeridos\` DROP COLUMN \`isPostDecisionReviewRequired\``);
        await queryRunner.query(`DROP INDEX \`IDX_34280c4475eed7397c0d2301b5\` ON \`au10tix\``);
        await queryRunner.query(`DROP TABLE \`au10tix\``);
        await queryRunner.query(`DROP TABLE \`au10tixResultData\``);
        await queryRunner.query(`DROP TABLE \`au10tixResultRemark\``);
    }

}
