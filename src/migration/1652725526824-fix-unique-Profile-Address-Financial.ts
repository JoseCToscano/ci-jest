import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUniqueProfileAddressFinancial1652725526824 implements MigrationInterface {
    name = 'fixUniqueProfileAddressFinancial1652725526824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        //fix estadoId
        await queryRunner.query(`ALTER TABLE \`profileDomicilio\` DROP FOREIGN KEY \`FK_4c805413f269f37d4892ec259ae\``);
        await queryRunner.query(`DROP INDEX \`REL_4c805413f269f37d4892ec259a\` ON \`profileDomicilio\``);
        await queryRunner.query(
            `ALTER TABLE \`profileDomicilio\` ADD CONSTRAINT \`FK_4c805413f269f37d4892ec259ae\` FOREIGN KEY (\`estadoId\`) REFERENCES \`staticEstadosMexico\`(\`idEstado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        //fix tipoDomicilioId
        await queryRunner.query(`ALTER TABLE \`profileDomicilio\` DROP FOREIGN KEY \`FK_c7419699e895f2db5a5c76358fc\``);
        await queryRunner.query(`DROP INDEX \`REL_c7419699e895f2db5a5c76358f\` ON \`profileDomicilio\``);
        await queryRunner.query(
            `ALTER TABLE \`profileDomicilio\` ADD CONSTRAINT \`FK_c7419699e895f2db5a5c76358fc\` FOREIGN KEY (\`tipoDomicilioId\`) REFERENCES \`staticTiposDomicilios\`(\`idTipoDomicilio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        //fix fuenteIngresoId
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` DROP FOREIGN KEY \`FK_7711de54c8dc5eb1d4846e22969\``);
        await queryRunner.query(`DROP INDEX \`REL_7711de54c8dc5eb1d4846e2296\` ON \`profileDatosFinancieros\``);
        await queryRunner.query(
            `ALTER TABLE \`profileDatosFinancieros\` ADD CONSTRAINT \`FK_7711de54c8dc5eb1d4846e22969\` FOREIGN KEY (\`fuenteIngresoId\`) REFERENCES \`staticTiposIngresos\`(\`idTipoIngreso\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        //fix industriaId
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` DROP FOREIGN KEY \`FK_a876b8c218803db0b8e1442e8fa\``);
        await queryRunner.query(`DROP INDEX \`REL_a876b8c218803db0b8e1442e8f\` ON \`profileDatosFinancieros\``);
        await queryRunner.query(
            `ALTER TABLE \`profileDatosFinancieros\` ADD CONSTRAINT \`FK_a876b8c218803db0b8e1442e8fa\` FOREIGN KEY (\`industriaLaboralId\`) REFERENCES \`staticIndustriasLaborales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );

        // updato to FE
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` DROP COLUMN \`economicDependents\``);
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` DROP COLUMN \`nombreComercial\``);
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` ADD \`economicDependents\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //fix estadoId
        await queryRunner.query(`ALTER TABLE \`profileDomicilio\` DROP FOREIGN KEY \`FK_4c805413f269f37d4892ec259ae\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_4c805413f269f37d4892ec259a\` ON \`profileDomicilio\` (\`estadoId\`)`);
        await queryRunner.query(
            `ALTER TABLE \`profileDomicilio\` ADD CONSTRAINT \`FK_4c805413f269f37d4892ec259ae\` FOREIGN KEY (\`estadoId\`) REFERENCES \`staticEstadosMexico\`(\`idEstado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        //fix tipoDomicilioId
        await queryRunner.query(`ALTER TABLE \`profileDomicilio\` DROP FOREIGN KEY \`FK_c7419699e895f2db5a5c76358fc\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_c7419699e895f2db5a5c76358f\` ON \`profileDomicilio\` (\`tipoDomicilioId\`)`);
        await queryRunner.query(
            `ALTER TABLE \`profileDomicilio\` ADD CONSTRAINT \`FK_c7419699e895f2db5a5c76358fc\` FOREIGN KEY (\`tipoDomicilioId\`) REFERENCES \`staticTiposDomicilios\`(\`idTipoDomicilio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        //fix fuenteIngresoId
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` DROP FOREIGN KEY \`FK_7711de54c8dc5eb1d4846e22969\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_7711de54c8dc5eb1d4846e2296\` ON \`profileDatosFinancieros\` (\`fuenteIngresoId\`)`);
        await queryRunner.query(
            `ALTER TABLE \`profileDatosFinancieros\` ADD CONSTRAINT \`FK_7711de54c8dc5eb1d4846e22969\` FOREIGN KEY (\`fuenteIngresoId\`) REFERENCES \`staticTiposIngresos\`(\`idTipoIngreso\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        //fix industriaId
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` DROP FOREIGN KEY \`FK_a876b8c218803db0b8e1442e8fa\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_a876b8c218803db0b8e1442e8f\` ON \`profileDatosFinancieros\` (\`industriaLaboralId\`)`);
        await queryRunner.query(
            `ALTER TABLE \`profileDatosFinancieros\` ADD CONSTRAINT \`FK_a876b8c218803db0b8e1442e8fa\` FOREIGN KEY (\`industriaLaboralId\`) REFERENCES \`staticIndustriasLaborales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );

        // update to FE
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` DROP COLUMN \`economicDependents\``);
        await queryRunner.query(`ALTER TABLE \`profileDatosFinancieros\` ADD \`nombreComercial\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`profileUserInfo\` ADD \`economicDependents\` int NOT NULL`);
    }
}
