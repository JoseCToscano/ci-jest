import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserV3IdToRegistroAccionAutomatica1656432742444
	implements MigrationInterface
{
	name = 'addUserV3IdToRegistroAccionAutomatica1656432742444';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`registrosAccionesAutomaticas\` ADD \`userV3Id\` int NULL`
		);
		await queryRunner.query(
			`ALTER TABLE \`registrosAccionesAutomaticas\` ADD CONSTRAINT \`FK_e5490f66b269f95aebe5eff4fac\` FOREIGN KEY (\`userV3Id\`) REFERENCES \`usersV3\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE \`registrosAccionesAutomaticas\` DROP FOREIGN KEY \`FK_e5490f66b269f95aebe5eff4fac\``
		);
		await queryRunner.query(
			`ALTER TABLE \`registrosAccionesAutomaticas\` DROP COLUMN \`userV3Id\``
		);
	}
}
