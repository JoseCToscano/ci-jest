import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConektaTables1649288262603 implements MigrationInterface {
	name = 'ConektaTables1649288262603';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE \`conektaCharges\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`livemode\` tinyint NOT NULL, \`chargeId\` varchar(255) NOT NULL, \`orderId\` varchar(255) NOT NULL, \`currency\` varchar(255) NOT NULL DEFAULT 'MXN', \`name\` varchar(255) NOT NULL, \`expMonth\` varchar(255) NOT NULL, \`expYear\` varchar(255) NOT NULL, \`paymentType\` varchar(255) NOT NULL, \`last4\` varchar(255) NOT NULL, \`brand\` varchar(255) NOT NULL, \`issuer\` varchar(255) NOT NULL, \`accountType\` varchar(255) NOT NULL, \`country\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`status\` varchar(255) NOT NULL, \`fee\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`conektaTokens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`livemode\` tinyint NOT NULL, \`tokenId\` varchar(255) NOT NULL, \`used\` tinyint NOT NULL DEFAULT 0, \`customerId\` varchar(255) NOT NULL, \`checkoutId\` varchar(255) NOT NULL, \`checkoutCreatedAt\` int NOT NULL, \`checkoutStartsAt\` int NOT NULL, \`checkoutExpiresAt\` int NOT NULL, UNIQUE INDEX \`IDX_9cf3172490aa88a271fe5f228e\` (\`tokenId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`conektaOrders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`livemode\` tinyint NOT NULL, \`orderId\` varchar(255) NOT NULL, \`customerId\` varchar(255) NOT NULL, \`amount\` int NOT NULL, \`currency\` varchar(255) NOT NULL DEFAULT 'MXN', \`amountRefunded\` int NOT NULL, \`paymentStatus\` varchar(255) NOT NULL, \`createdAt\` int NOT NULL, \`tokenId\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_d394b92542dbd087560afcf811\` (\`orderId\`), UNIQUE INDEX \`REL_af9fcffac6228eb49e050a3ed1\` (\`tokenId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`CREATE TABLE \`conektaCustomers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, \`isActive\` tinyint NOT NULL DEFAULT 1, \`livemode\` tinyint NOT NULL, \`customerId\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`createdAt\` int NOT NULL, \`corporate\` tinyint NOT NULL, \`userV3Id\` int NOT NULL, UNIQUE INDEX \`IDX_e5d8891c05e95ac4a8668409d9\` (\`customerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaCharges\` ADD CONSTRAINT \`FK_d04588c2dcdae3e66aca3e2dcd3\` FOREIGN KEY (\`orderId\`) REFERENCES \`conektaOrders\`(\`orderId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaTokens\` ADD CONSTRAINT \`FK_0b3e97d3b5f4fbb5780e2fc4061\` FOREIGN KEY (\`customerId\`) REFERENCES \`conektaCustomers\`(\`customerId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaOrders\` ADD CONSTRAINT \`FK_b175863252301f2b863ff378828\` FOREIGN KEY (\`customerId\`) REFERENCES \`conektaCustomers\`(\`customerId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaOrders\` ADD CONSTRAINT \`FK_af9fcffac6228eb49e050a3ed15\` FOREIGN KEY (\`tokenId\`) REFERENCES \`conektaTokens\`(\`tokenId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
		await queryRunner.query(
			'INSERT IGNORE INTO formaPagos (id, clave, descripcion) VALUES (9, "ConektaCard", "Pago mediante el checkout de conekta con tarjeta")'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`conektaOrders\` DROP FOREIGN KEY \`FK_af9fcffac6228eb49e050a3ed15\``
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaOrders\` DROP FOREIGN KEY \`FK_b175863252301f2b863ff378828\``
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaTokens\` DROP FOREIGN KEY \`FK_0b3e97d3b5f4fbb5780e2fc4061\``
		);
		await queryRunner.query(
			`ALTER TABLE \`conektaCharges\` DROP FOREIGN KEY \`FK_d04588c2dcdae3e66aca3e2dcd3\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_e5d8891c05e95ac4a8668409d9\` ON \`conektaCustomers\``
		);
		await queryRunner.query(`DROP TABLE \`conektaCustomers\``);
		await queryRunner.query(
			`DROP INDEX \`REL_af9fcffac6228eb49e050a3ed1\` ON \`conektaOrders\``
		);
		await queryRunner.query(
			`DROP INDEX \`IDX_d394b92542dbd087560afcf811\` ON \`conektaOrders\``
		);
		await queryRunner.query(`DROP TABLE \`conektaOrders\``);
		await queryRunner.query(
			`DROP INDEX \`IDX_9cf3172490aa88a271fe5f228e\` ON \`conektaTokens\``
		);
		await queryRunner.query(`DROP TABLE \`conektaTokens\``);
		await queryRunner.query(`DROP TABLE \`conektaCharges\``);
	}
}
