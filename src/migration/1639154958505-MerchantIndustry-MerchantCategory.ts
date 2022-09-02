import {MigrationInterface, QueryRunner} from "typeorm";

export class MerchantIndustryMerchantCategory1639154958505 implements MigrationInterface {
    name = 'MerchantIndustryMerchantCategory1639154958505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE merchantCategories (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, clave varchar(100) NOT NULL, industryId int NULL, PRIMARY KEY (id)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE comercios ADD categoryId int NULL`);
        await queryRunner.query(`ALTER TABLE merchantCategories ADD CONSTRAINT FK_1296a2c539003e5a2f807ef8a95 FOREIGN KEY (industryId) REFERENCES merchantIndustries(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE comercios ADD CONSTRAINT FK_e2016d15e181493e5c61124232b FOREIGN KEY (categoryId) REFERENCES merchantCategories(id) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE comercios DROP FOREIGN KEY FK_e2016d15e181493e5c61124232b`);
        await queryRunner.query(`ALTER TABLE comercios DROP COLUMN categoryId`);
        await queryRunner.query(`ALTER TABLE merchantCategories DROP FOREIGN KEY FK_1296a2c539003e5a2f807ef8a95`);
        await queryRunner.query(`DROP TABLE merchantCategories`);
    }

}
