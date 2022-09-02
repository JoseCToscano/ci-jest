import {MigrationInterface, QueryRunner} from "typeorm";

export class BalanceUpdatesManyToManyTable1635437803102 implements MigrationInterface {
    name = 'BalanceUpdatesManyToManyTable1635437803102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`balance_updates_considered_in_balance_updates\` (\`balanceUpdatesId_1\` int NOT NULL, \`balanceUpdatesId_2\` int NOT NULL, INDEX \`IDX_9e236f619f4c523222d9817aa0\` (\`balanceUpdatesId_1\`), INDEX \`IDX_fd6c6388414484f469f6ff8407\` (\`balanceUpdatesId_2\`), PRIMARY KEY (\`balanceUpdatesId_1\`, \`balanceUpdatesId_2\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`balance_updates_considered_in_balance_updates\` ADD CONSTRAINT \`FK_9e236f619f4c523222d9817aa0f\` FOREIGN KEY (\`balanceUpdatesId_1\`) REFERENCES \`balanceUpdates\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`balance_updates_considered_in_balance_updates\` ADD CONSTRAINT \`FK_fd6c6388414484f469f6ff84076\` FOREIGN KEY (\`balanceUpdatesId_2\`) REFERENCES \`balanceUpdates\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_fd6c6388414484f469f6ff8407\` ON \`balance_updates_considered_in_balance_updates\``);
        await queryRunner.query(`DROP INDEX \`IDX_9e236f619f4c523222d9817aa0\` ON \`balance_updates_considered_in_balance_updates\``);
        await queryRunner.query(`DROP TABLE \`balance_updates_considered_in_balance_updates\``);
    }

}
