import { MigrationInterface, QueryRunner } from "typeorm";

export class CreacionUsuarioMaestro1599835808580 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV !== "test") {
      await queryRunner.query("ALTER TABLE rutas AUTO_INCREMENT = 1");
      await queryRunner.query("ALTER TABLE gruposAdmin AUTO_INCREMENT = 1");
      await queryRunner.query(`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/register', 'POST'),('/v3/admin/getAdmin', 'GET'),('/v3/admin/iam/addRoute', 'POST'),('/v3/admin/iam/addGroup', 'POST'),('/v3/admin/iam/fetchRoutes', 'GET'),('/v3/admin/iam/fetchGroups', 'GET'),('/v3/admin/iam/fetchAdmins', 'GET'),('/v3/admin/iam/fetchSingleAdmin', 'POST'),('/v3/admin/iam/updateGroup', 'POST'),('/v3/admin/iam/updateAdmin', 'POST'),('/v3/admin/iam/deleteRoute', 'POST'),('/v3/admin/iam/deactivateGroup', 'POST'),('/v3/admin/iam/deactivateAdmin', 'POST');`);
      await queryRunner.query(`INSERT INTO gruposAdmin(nombre,descripcion) VALUES ('GRUPOMAESTRO', 'Grupo maestro');`);
      await queryRunner.query(`INSERT INTO grupos_admin_rutas_permitidas_rutas(gruposAdminId,rutasId) VALUES ('1','1'),('1','2'),('1','3'),('1','4'),('1','5'),('1','6'),('1','7'),('1','8'),('1','9'),('1','10'),('1','11'),('1','12');`);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM rutas;`);
    await queryRunner.query(`DELETE FROM gruposAdmin;`);
    await queryRunner.query(`DELETE FROM adminsV3;`);
  }
}
