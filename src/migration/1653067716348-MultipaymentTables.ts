import { MigrationInterface, QueryRunner } from 'typeorm';

export class MultipaymentTables1653067716348 implements MigrationInterface {
	name = 'MultipaymentTables1653067716348';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`userV3OxxoPay\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`codigoReferencia\` varchar(255) NOT NULL, \`pagoMin\` int NOT NULL, \`pagoMax\` int NOT NULL, \`creditOwnerId\` int NOT NULL, UNIQUE INDEX \`IDX_63b1fedf39a1aa66ec6955e514\` (\`userV3Id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`userV3SPEI\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`referencia\` varchar(255) NOT NULL, \`creditOwnerId\` int NOT NULL, UNIQUE INDEX \`IDX_f7f89668b0720d8f4d0843beb1\` (\`userV3Id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`userV3CIE\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`reference\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_9ac4574b3c4b4cceaf03b2302c\` (\`userV3Id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`userV3Payments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`idConekta\` varchar(60) NULL, \`monto\` double NOT NULL, \`fechaConciliacion\` datetime(0) NULL, \`fechaPago\` datetime(0) NOT NULL, \`isAutoconciliado\` tinyint NOT NULL DEFAULT 0, \`isConciliado\` tinyint NOT NULL DEFAULT 0, \`isBulk\` tinyint NOT NULL DEFAULT 0, \`referencia\` varchar(50) NOT NULL, \`comentario\` varchar(1024) NOT NULL, \`formaPagoId\` int NOT NULL, \`adminConciliadorId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`pagos\` ADD \`userV3PaymentId\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3OxxoPay\` ADD CONSTRAINT \`FK_3250fde2b4a56a3527fae283794\` FOREIGN KEY (\`creditOwnerId\`) REFERENCES \`creditOwners\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3OxxoPay\` ADD CONSTRAINT \`FK_63b1fedf39a1aa66ec6955e5140\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3SPEI\` ADD CONSTRAINT \`FK_f4291abcfeca987a78a2b6330e2\` FOREIGN KEY (\`creditOwnerId\`) REFERENCES \`creditOwners\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3SPEI\` ADD CONSTRAINT \`FK_f7f89668b0720d8f4d0843beb17\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3CIE\` ADD CONSTRAINT \`FK_9ac4574b3c4b4cceaf03b2302ca\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`pagos\` ADD CONSTRAINT \`FK_deaf97a48db02fdeb92e06ce860\` FOREIGN KEY (\`userV3PaymentId\`) REFERENCES \`userV3Payments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`pagos\` DROP FOREIGN KEY \`FK_deaf97a48db02fdeb92e06ce860\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3Payments\` DROP FOREIGN KEY \`FK_d9b261f7940ce00303d8bdc4c0a\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3Payments\` DROP FOREIGN KEY \`FK_e4e077e61d4c9aab4a605c10f0e\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3Payments\` DROP FOREIGN KEY \`FK_a06cddf92be41384af1b796d33c\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3CIE\` DROP FOREIGN KEY \`FK_9ac4574b3c4b4cceaf03b2302ca\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3SPEI\` DROP FOREIGN KEY \`FK_f7f89668b0720d8f4d0843beb17\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3SPEI\` DROP FOREIGN KEY \`FK_f4291abcfeca987a78a2b6330e2\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3OxxoPay\` DROP FOREIGN KEY \`FK_63b1fedf39a1aa66ec6955e5140\``
		);
		await queryRunner.query(
			`ALTER TABLE \`userV3OxxoPay\` DROP FOREIGN KEY \`FK_3250fde2b4a56a3527fae283794\``
		);
		await queryRunner.query(
			`ALTER TABLE \`pagos\` DROP COLUMN \`userV3PaymentId\``
		);
		await queryRunner.query(`DROP TABLE \`userV3Payments\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_9ac4574b3c4b4cceaf03b2302c\` ON \`userV3CIE\``
		);
		await queryRunner.query(`DROP TABLE \`userV3CIE\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_f7f89668b0720d8f4d0843beb1\` ON \`userV3SPEI\``
		);
		await queryRunner.query(`DROP TABLE \`userV3SPEI\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_63b1fedf39a1aa66ec6955e514\` ON \`userV3OxxoPay\``
		);
		await queryRunner.query(`DROP TABLE \`userV3OxxoPay\``);
	}
}
