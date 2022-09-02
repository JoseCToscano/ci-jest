import {MigrationInterface, QueryRunner} from "typeorm";

export class ClavesEstadosRenapo1627498368555 implements MigrationInterface {
	name = 'ClavesEstadosRenapo1627498368555'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("ALTER TABLE `staticEstadosMexico` ADD `claveRenapo` varchar(2)");
		await queryRunner.query("ALTER TABLE `staticEstadosMexico` ADD UNIQUE INDEX `IDX_c5cbd7390f6988c3c38a811a3e` (`claveRenapo`)");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'AS' WHERE claveEstado = 'AGS' ;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'BC' WHERE claveEstado = 'BC'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'BS' WHERE claveEstado = 'BCS'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CC' WHERE claveEstado = 'CAMP'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CS' WHERE claveEstado = 'CHIS'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CH' WHERE claveEstado = 'CHIH'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'DF' WHERE claveEstado = 'CDMX'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CL' WHERE claveEstado = 'COAH'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CM' WHERE claveEstado = 'COL'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'DG' WHERE claveEstado = 'DGO'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'MC' WHERE claveEstado = 'MEX'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'GT' WHERE claveEstado = 'GTO'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'GR' WHERE claveEstado = 'GRO'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'HG' WHERE claveEstado = 'HGO'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'JC' WHERE claveEstado = 'JAL'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'MN' WHERE claveEstado = 'MICH'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'MS' WHERE claveEstado = 'MOR'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'NT' WHERE claveEstado = 'NAY'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'NL' WHERE claveEstado = 'NL'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'OC' WHERE claveEstado = 'OAX'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'PL' WHERE claveEstado = 'PUE'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'QT' WHERE claveEstado = 'QRO'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'QR' WHERE claveEstado = 'QROO'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'SP' WHERE claveEstado = 'SLP'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'SL' WHERE claveEstado = 'SIN'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'SR' WHERE claveEstado = 'SON'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'TC' WHERE claveEstado = 'TAB'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'TS' WHERE claveEstado = 'TAMP'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'TL' WHERE claveEstado = 'TLAX'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'VZ' WHERE claveEstado = 'VER'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'YN' WHERE claveEstado = 'YUC'	;");
		await queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'ZS' WHERE claveEstado = 'ZAC'	;");
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query("ALTER TABLE `staticEstadosMexico` DROP INDEX `IDX_c5cbd7390f6988c3c38a811a3e`");
		await queryRunner.query("ALTER TABLE `staticEstadosMexico` DROP COLUMN `claveRenapo`");
	}

}