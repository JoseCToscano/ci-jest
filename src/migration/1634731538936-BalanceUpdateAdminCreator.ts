import {MigrationInterface, QueryRunner} from "typeorm";

export class BalanceUpdateAdminCreator1634731538936 implements MigrationInterface {
    name = 'BalanceUpdateAdminCreator1634731538936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD \`adminCreatorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` ADD CONSTRAINT \`FK_48026c245a04a38adec686c3032\` FOREIGN KEY (\`adminCreatorId\`) REFERENCES \`adminsV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP FOREIGN KEY \`FK_48026c245a04a38adec686c3032\``);
        await queryRunner.query(`ALTER TABLE \`balanceUpdates\` DROP COLUMN \`adminCreatorId\``);
    }

}
