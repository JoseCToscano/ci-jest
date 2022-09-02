import {MigrationInterface, QueryRunner} from "typeorm";

export class SetUserV3CurpNotUnique1627408243441 implements MigrationInterface {
    name = 'SetUserV3CurpNotUnique1627408243441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_49ff6ae4b476021b5d7075c562` ON `usersV3`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_49ff6ae4b476021b5d7075c562` ON `usersV3` (`curp`)");
    }

}
