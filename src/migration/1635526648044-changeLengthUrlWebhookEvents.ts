import {MigrationInterface, QueryRunner} from "typeorm";

export class changeLengthUrlWebhookEvents1635526648044 implements MigrationInterface {
    name = 'changeLengthUrlWebhookEvents1635526648044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhookEvents` modify `url`  varchar(500) NOT NULL;");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `webhookEvents` modify `url`  varchar(150) NOT NULL;");
    }

}
