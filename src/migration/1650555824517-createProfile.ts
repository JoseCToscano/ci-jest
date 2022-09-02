import { MigrationInterface, QueryRunner } from 'typeorm';

export class createProfile1650555824517 implements MigrationInterface {
	name = 'createProfile1650555824517';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`userInfoId\` int NULL, \`financialDataId\` int NULL, \`addressId\` int NULL, \`ccReportesId\` int NULL, \`seonVerificationId\` int NULL, \`au10tixId\` int NULL, UNIQUE INDEX \`REL_0ef76738336c332b55a06902d5\` (\`userV3Id\`), UNIQUE INDEX \`REL_92aaf32f3491abc8f398cc7f79\` (\`userInfoId\`), UNIQUE INDEX \`REL_f9f0aa2a3192b917f7eeb03f12\` (\`financialDataId\`), UNIQUE INDEX \`REL_82e9573eb65966504b27754065\` (\`addressId\`), UNIQUE INDEX \`REL_e26abd2ba3424c6a383ee7ad25\` (\`ccReportesId\`), UNIQUE INDEX \`REL_cf33c6926802bff849b7798483\` (\`seonVerificationId\`), UNIQUE INDEX \`REL_6af25bfb4855f094e4de230c28\` (\`au10tixId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDocuments\` ADD \`profileId\` int NOT NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_0ef76738336c332b55a06902d53\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_92aaf32f3491abc8f398cc7f793\` FOREIGN KEY (\`userInfoId\`) REFERENCES \`profileUserInfo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_f9f0aa2a3192b917f7eeb03f12b\` FOREIGN KEY (\`financialDataId\`) REFERENCES \`profileDatosFinancieros\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_82e9573eb65966504b27754065d\` FOREIGN KEY (\`addressId\`) REFERENCES \`profileDomicilio\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_e26abd2ba3424c6a383ee7ad257\` FOREIGN KEY (\`ccReportesId\`) REFERENCES \`ccReportes\`(\`idReporte\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_cf33c6926802bff849b77984834\` FOREIGN KEY (\`seonVerificationId\`) REFERENCES \`seonVerification\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` ADD CONSTRAINT \`FK_6af25bfb4855f094e4de230c28c\` FOREIGN KEY (\`au10tixId\`) REFERENCES \`au10tix\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDocuments\` ADD CONSTRAINT \`FK_bf270df53708ae93deaaa027e52\` FOREIGN KEY (\`profileId\`) REFERENCES \`profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`profileDocuments\` DROP FOREIGN KEY \`FK_bf270df53708ae93deaaa027e52\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_6af25bfb4855f094e4de230c28c\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_cf33c6926802bff849b77984834\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_e26abd2ba3424c6a383ee7ad257\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_82e9573eb65966504b27754065d\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_f9f0aa2a3192b917f7eeb03f12b\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_92aaf32f3491abc8f398cc7f793\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profile\` DROP FOREIGN KEY \`FK_0ef76738336c332b55a06902d53\``
		);
		await queryRunner.query(
			`ALTER TABLE \`profileDocuments\` DROP COLUMN \`profileId\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_6af25bfb4855f094e4de230c28\` ON \`profile\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_cf33c6926802bff849b7798483\` ON \`profile\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_e26abd2ba3424c6a383ee7ad25\` ON \`profile\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_82e9573eb65966504b27754065\` ON \`profile\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_f9f0aa2a3192b917f7eeb03f12\` ON \`profile\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_92aaf32f3491abc8f398cc7f79\` ON \`profile\``
		);
		await queryRunner.query(
			`DROP INDEX \`REL_0ef76738336c332b55a06902d5\` ON \`profile\``
		);
		await queryRunner.query(`DROP TABLE \`profile\``);
	}
}
