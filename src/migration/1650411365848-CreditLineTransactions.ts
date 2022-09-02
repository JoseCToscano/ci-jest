import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreditLineTransactions1650411365848 implements MigrationInterface {
	name = 'CreditLineTransactions1650411365848';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`creditLineTransactionTypes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`name\` varchar(140) NOT NULL, \`description\` varchar(140) NOT NULL, \`movementType\` int NOT NULL, UNIQUE INDEX \`IDX_0eeca8316d5520e34dc4c8e286\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`creditLineTransactions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`isLineActive\` int NOT NULL, \`baseCreditLine\` float NOT NULL, \`creditDebt\` float NOT NULL, \`availableLine\` float NOT NULL, \`transactionTypeId\` int NOT NULL, \`creditId\` int NULL, \`originalTransactionId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`creditLineHistory\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`userV3Id\` int NOT NULL, \`isLineActive\` tinyint NOT NULL DEFAULT 0, \`baseCreditLine\` float NOT NULL, \`creditDebt\` float NOT NULL, \`availableLine\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`creditosV3\` ADD \`signedViaCreditLine\` tinyint NOT NULL DEFAULT 0`
		);
		await queryRunner.query(
			`ALTER TABLE \`creditLineTransactions\` ADD CONSTRAINT \`FK_a4574a48544fdd701a81b8010f9\` FOREIGN KEY (\`transactionTypeId\`) REFERENCES \`creditLineTransactionTypes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`creditLineTransactions\` ADD CONSTRAINT \`FK_8e2340b6905059df917e2d33e19\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`creditLineHistory\` ADD CONSTRAINT \`FK_d9981859cc888d5936d09f9405c\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);

		await queryRunner.query(
			`INSERT INTO \`creditLineTransactionTypes\` (\`id\`, \`name\`, \`description\`, \`movementType\`) VALUES (1, "Activación de línea de crédito", "Cuando un evento causa que la línea de crédito se libere al cliente", 1),(2, "Desactivación de línea de crédito", "Cuando un evento causa que la línea de crédito se desactive al cliente", 1),(3, "Cálculo de la línea base", "Cuando un cliente firma un crédito nuevo la línea base se recalcula con las nuevas variables obtenidas", 2),(4, "Cargo a deuda por nuevo crédito", "El cliente firma un nuevo crédito, lo cual causa que la deuda de crédito incremente", 3),(5, "Cargo a deuda por penalizaciones", "El cliente se atrasa en su pago, por lo que se le cobran intereses y comisiones adicionales", 3),(6, "Abono a deuda por pago", "El cliente pagó parte de su saldo insoluto, por lo que la deuda se reduce", 3),(7, "Abono a deuda por cancelación de crédito", "El cliente canceló un crédito, por lo que la deuda disminuye", 3),(8, "Transacción manual de activación/desactivación", "El equipo operativo manualmente cambia el estatus de disponibilidad de la linea", 1),(9, "Transacción manual de calculo linea base", "El equipo operativo manualmente cambia la línea base de un cliente", 2),(10, "Transacción manual de cambios en deuda", "El equipo operativo manualmente cambia la deuda de un cliente", 3)`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`creditLineHistory\` DROP FOREIGN KEY \`FK_d9981859cc888d5936d09f9405c\``
		);
		await queryRunner.query(
			`ALTER TABLE \`creditLineTransactions\` DROP FOREIGN KEY \`FK_8e2340b6905059df917e2d33e19\``
		);
		await queryRunner.query(
			`ALTER TABLE \`creditLineTransactions\` DROP FOREIGN KEY \`FK_a4574a48544fdd701a81b8010f9\``
		);
		await queryRunner.query(
			`ALTER TABLE \`creditosV3\` DROP COLUMN \`signedViaCreditLine\``
		);
		await queryRunner.query(`DROP TABLE \`creditLineHistory\``);
		await queryRunner.query(`DROP TABLE \`creditLineTransactions\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_0eeca8316d5520e34dc4c8e286\` ON \`creditLineTransactionTypes\``
		);
		await queryRunner.query(`DROP TABLE \`creditLineTransactionTypes\``);
	}
}
