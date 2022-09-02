import { MigrationInterface, QueryRunner } from 'typeorm';

export class AtratoLogColumnsLengthUpdate1657046947341
	implements MigrationInterface
{
	name = 'AtratoLogColumnsLengthUpdate1657046947341';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'ALTER TABLE `atratologs` MODIFY `category` VARCHAR(45) NOT NULL;'
		);
		await queryRunner.query(
			'ALTER TABLE `atratologs` MODIFY `type` VARCHAR(45) NOT NULL;'
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			'ALTER TABLE `atratologs` MODIFY `category` VARCHAR(10) NOT NULL;'
		);
		await queryRunner.query(
			'ALTER TABLE `atratologs` MODIFY `type` VARCHAR(10) NOT NULL;'
		);
	}
}
