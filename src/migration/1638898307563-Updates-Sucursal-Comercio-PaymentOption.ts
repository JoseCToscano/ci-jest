import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatesSucursalComercioPaymentOption1638898307563 implements MigrationInterface {
    name = 'UpdatesSucursalComercioPaymentOption1638898307563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE merchantIndustries (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, clave varchar(100) NOT NULL, UNIQUE INDEX IDX_537a1143f53580b138c6da5857 (clave), PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE paymentOptions ADD canCommissionBeAutoUpdated tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE paymentOptions ADD isInTrialPeriod tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE paymentOptions ADD endOfTrialPeriod datetime(0) NULL`);
        await queryRunner.query(`ALTER TABLE sucursales ADD rfc varchar(13) NULL`);
        await queryRunner.query(`ALTER TABLE sucursales ADD razonSocial varchar(120) NULL`);
        await queryRunner.query(`ALTER TABLE sucursales ADD direccion varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE comercios ADD industryId int NULL`);
        await queryRunner.query(`ALTER TABLE comercios ADD CONSTRAINT FK_77d023a19ea51c521143a171a88 FOREIGN KEY (industryId) REFERENCES merchantIndustries(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE comercios DROP FOREIGN KEY FK_77d023a19ea51c521143a171a88`);
        await queryRunner.query(`ALTER TABLE comercios DROP COLUMN industryId`);
        await queryRunner.query(`ALTER TABLE sucursales DROP COLUMN direccion`);
        await queryRunner.query(`ALTER TABLE sucursales DROP COLUMN razonSocial`);
        await queryRunner.query(`ALTER TABLE sucursales DROP COLUMN rfc`);
        await queryRunner.query(`ALTER TABLE paymentOptions DROP COLUMN endOfTrialPeriod`);
        await queryRunner.query(`ALTER TABLE paymentOptions DROP COLUMN isInTrialPeriod`);
        await queryRunner.query(`ALTER TABLE paymentOptions DROP COLUMN canCommissionBeAutoUpdated`);
        await queryRunner.query(`DROP INDEX IDX_537a1143f53580b138c6da5857 ON merchantIndustries`);
        await queryRunner.query(`DROP TABLE merchantIndustries`);
    }

}
