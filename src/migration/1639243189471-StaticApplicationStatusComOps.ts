import {MigrationInterface, QueryRunner} from "typeorm";

export class StaticApplicationStatusComOps1639243189471 implements MigrationInterface {
    name = 'StaticApplicationStatusComOps1639243189471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`staticApplicationStatusCom\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`status\` varchar(100) NOT NULL, \`description\` varchar(300) NULL, \`groupName\` varchar(100) NULL, \`sortValue\` int NULL, UNIQUE INDEX \`IDX_4139c182f1b98951e6b4c8bb76\` (\`status\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`staticApplicationStatusOps\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`status\` varchar(100) NOT NULL, \`description\` varchar(300) NULL, \`groupName\` varchar(100) NULL, \`sortValue\` int NULL, UNIQUE INDEX \`IDX_9015f75d81514881f75d1ef93b\` (\`status\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` ADD \`idStaticApplicationStatusOps\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` ADD \`idStaticApplicationStatusCom\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` ADD CONSTRAINT \`FK_c5ad6f03b3acc9bd9c53e45d67b\` FOREIGN KEY (\`idStaticApplicationStatusCom\`) REFERENCES \`staticApplicationStatusCom\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` ADD CONSTRAINT \`FK_4283d1e0bd2026501b4ab68294a\` FOREIGN KEY (\`idStaticApplicationStatusOps\`) REFERENCES \`staticApplicationStatusOps\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` DROP FOREIGN KEY \`FK_4283d1e0bd2026501b4ab68294a\``);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` DROP FOREIGN KEY \`FK_c5ad6f03b3acc9bd9c53e45d67b\``);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` DROP COLUMN \`idStaticApplicationStatusCom\``);
        await queryRunner.query(`ALTER TABLE \`staticEstadosSolicitudes\` DROP COLUMN \`idStaticApplicationStatusOps\``);
        await queryRunner.query(`DROP INDEX \`IDX_9015f75d81514881f75d1ef93b\` ON \`staticApplicationStatusOps\``);
        await queryRunner.query(`DROP TABLE \`staticApplicationStatusOps\``);
        await queryRunner.query(`DROP INDEX \`IDX_4139c182f1b98951e6b4c8bb76\` ON \`staticApplicationStatusCom\``);
        await queryRunner.query(`DROP TABLE \`staticApplicationStatusCom\``);
    }
}
