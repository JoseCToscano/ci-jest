import {MigrationInterface, QueryRunner} from "typeorm";

export class IndustryStaticValues1639156051116 implements MigrationInterface {
    name = 'IndustryStaticValues1639156051116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO merchantIndustries(id, clave) VALUES (1, "Salud"),(2,"Quirografario"),(3,"Bicicletas"),(4,"Llantas"),(5,"Motocicletas"),(6,"Muebles"),(7,"Electrónicos"),(8,"Bicicletas estáticas"),(9,"Instrumentos musicales"),(10,"Construcción"),(11,"Otros");`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Tratamiento piernas", 1),("Prótesis piernas", 1),("Otros", 1),("Alineadores dentales", 1),("Clínica dental", 1);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Quirografario", 2);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Gama alta",3),("Gama media",3),("CCB",3),("Eléctrica",3),("Gama baja",3);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Llantas", 4);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Motocicletas eléctricas", 5),("Motocicletas motor", 5)`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Muebles", 6),("Colchones", 6)`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Celulares", 7),("Computadoras", 7),("Electrónicos", 7)`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Bicicletas estáticas", 8);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Instrumentos musicales", 9);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Construcción", 10);`);
        await queryRunner.query(`INSERT INTO merchantCategories(clave, industryId) VALUES ("Otros", 11),("Tatuajes", 11),("Juguetes sexuales", 11),("Construcción", 11),("Viajes", 11),("Ropa", 11);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM merchantCategories;`);
        await queryRunner.query(`DELETE FROM merchantIndustries;`);
    }

}
