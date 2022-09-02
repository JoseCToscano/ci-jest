import { MigrationInterface, QueryRunner } from 'typeorm';

export class createProfileDireccionesDatosFinacieros1650489634816
	implements MigrationInterface
{
	name = 'createProfileDireccionesDatosFinacieros1650489634816';

	public async up(queryRunner: QueryRunner): Promise<void> {
		/**  ProfileDomicilio **/
		await queryRunner.query(
			`CREATE TABLE \`profileDomicilio\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`aniosAntiguedad\` int NULL, \`municipio\` varchar(45) NULL, \`calle\` varchar(120) NULL, \`numeroExterior\` varchar(20) NULL, \`numeroInterior\` varchar(20) NULL, \`codigoPostal\` varchar(6) NULL, \`colonia\` varchar(61) NULL, \`ciudad\` varchar(61) NULL, \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`tipoDomicilioId\` int NULL, \`estadoId\` int NULL, UNIQUE INDEX \`REL_c7419699e895f2db5a5c76358f\` (\`tipoDomicilioId\`), UNIQUE INDEX \`REL_4c805413f269f37d4892ec259a\` (\`estadoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);

		await queryRunner.query(
			`ALTER TABLE \`profileDomicilio\` ADD CONSTRAINT \`FK_c7419699e895f2db5a5c76358fc\` FOREIGN KEY (\`tipoDomicilioId\`) REFERENCES \`staticTiposDomicilios\`(\`idTipoDomicilio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDomicilio\` ADD CONSTRAINT \`FK_4c805413f269f37d4892ec259ae\` FOREIGN KEY (\`estadoId\`) REFERENCES \`staticEstadosMexico\`(\`idEstado\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		/**  profileDatosFinancieros **/
		await queryRunner.query(
			`CREATE TABLE \`profileDatosFinancieros\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`antiguedadIngresos\` int NULL, \`nombreComercial\` varchar(100) NULL, \`ingresosMensuales\` double NULL, \`gastosMensuales\` double NULL, \`isAutoempleado\` tinyint NULL, \`updatedAt\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`fuenteIngresoId\` int NULL, \`industriaLaboralId\` int NULL, UNIQUE INDEX \`REL_7711de54c8dc5eb1d4846e2296\` (\`fuenteIngresoId\`), UNIQUE INDEX \`REL_a876b8c218803db0b8e1442e8f\` (\`industriaLaboralId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDatosFinancieros\` ADD CONSTRAINT \`FK_7711de54c8dc5eb1d4846e22969\` FOREIGN KEY (\`fuenteIngresoId\`) REFERENCES \`staticTiposIngresos\`(\`idTipoIngreso\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDatosFinancieros\` ADD CONSTRAINT \`FK_a876b8c218803db0b8e1442e8fa\` FOREIGN KEY (\`industriaLaboralId\`) REFERENCES \`staticIndustriasLaborales\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		/**  ProfileDomicilio **/
		await queryRunner.query(
			`ALTER TABLE \`profileDomicilio\` DROP FOREIGN KEY \`FK_4c805413f269f37d4892ec259ae\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDomicilio\` DROP FOREIGN KEY \`FK_c7419699e895f2db5a5c76358fc\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_4c805413f269f37d4892ec259a\` ON \`profileDomicilio\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_c7419699e895f2db5a5c76358f\` ON \`profileDomicilio\``
		);
		await queryRunner.query(`DROP TABLE \`profileDomicilio\``);

		/**  profileDatosFinancieros **/
		await queryRunner.query(
			`ALTER TABLE \`profileDatosFinancieros\` DROP FOREIGN KEY \`FK_a876b8c218803db0b8e1442e8fa\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDatosFinancieros\` DROP FOREIGN KEY \`FK_7711de54c8dc5eb1d4846e22969\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_a876b8c218803db0b8e1442e8f\` ON \`profileDatosFinancieros\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_7711de54c8dc5eb1d4846e2296\` ON \`profileDatosFinancieros\``
		);
		await queryRunner.query(`DROP TABLE \`profileDatosFinancieros\``);
	}
}
