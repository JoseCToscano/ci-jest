import {MigrationInterface, QueryRunner} from "typeorm";

export class PromotionRelation1634043506644 implements MigrationInterface {
    name = 'PromotionRelation1634043506644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD \`promotionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` ADD CONSTRAINT \`FK_f2256a76d91e2b78bcae4792e5c\` FOREIGN KEY (\`promotionId\`) REFERENCES \`promotions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP FOREIGN KEY \`FK_f2256a76d91e2b78bcae4792e5c\``);
        await queryRunner.query(`ALTER TABLE \`creditosV3\` DROP COLUMN \`promotionId\``);
    }

}
