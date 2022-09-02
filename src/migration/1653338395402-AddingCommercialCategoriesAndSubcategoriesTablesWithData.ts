import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402
	implements MigrationInterface
{
	name =
		'AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'commercialCategories',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isNullable: false,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'fechaCreacion',
						type: 'datetime',
						precision: 0,
						default: 'CURRENT_TIMESTAMP',
					},
					{
						name: 'isActive',
						type: 'boolean',
						default: true,
						isNullable: false,
					},
					{
						name: 'name',
						type: 'varchar',
						length: '50',
						isNullable: false,
					},
				],
			}),
			true,
			true,
			true
		);
		await queryRunner.createTable(
			new Table({
				name: 'commercialSubcategories',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isNullable: false,
						generationStrategy: 'increment',
						isGenerated: true,
					},
					{
						name: 'fechaCreacion',
						type: 'datetime',
						precision: 0,
						default: 'CURRENT_TIMESTAMP',
					},
					{
						name: 'isActive',
						type: 'boolean',
						default: true,
						isNullable: false,
					},
					{
						name: 'name',
						type: 'varchar',
						length: '50',
						isNullable: false,
					},
					{
						name: 'commercialCategoryId',
						type: 'int',
						isNullable: false,
					},
				],
			}),
			true,
			true,
			true
		);
		await queryRunner.createForeignKey(
			'commercialSubcategories',
			new TableForeignKey({
				columnNames: ['commercialCategoryId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'commercialCategories',
				onDelete: 'CASCADE',
			})
		);
		await queryRunner.query(
			`INSERT INTO commercialCategories(name) VALUES ('Comercio'),('Deportes y equipo'),('Educación'),('Electrónicos y tecnología'),('Hogar'),('Moda y accesorios'),('Movilidad'),('Para negocios'),('Salud y belleza'),('Viajes'),('Otro');`
		);
		await queryRunner.query(
			`INSERT INTO commercialSubcategories(name, commercialCategoryId) VALUES ('Varios', 1),('Ciclismo', 2),('Ejercicio en casa', 2),('Moda y accesorios', 2),('Cursos', 3),('Celulares', 4),('Computadoras', 4),('Gaming', 4),('Electronica', 4),('Equipos Varios', 4),('Impresoras 3D', 4),('Máquinas de coser', 4),('Música', 4),('Cocina', 5),('Construcción', 5),('Cortinas', 5),('Ferreteria', 5),('Material para construcción', 5),('Muebles', 5),('Colchones', 5),('Persianas', 5),('Sneakers', 6),('Joyas', 6),('Ropa', 6),('Tatuajes', 6),('Zapatos', 6),('Deportes', 6),('Accesorios', 6),('Accesorios', 7),('Bicicletas eléctricas', 7),('Motocicletas', 7),('Motos eléctricas', 7),('Equipo restaurantes', 8),('Inventario', 8),('Equipo salud', 8),('Inventario belleza', 8),('Dental', 9),('Skin care', 9),('Moda y Accesorios', 9),('Viajes', 10),('Otro', 11);`
		);
		await queryRunner.addColumn(
			'comercios',
			new TableColumn({
				name: 'commercialCategoryId',
				type: 'int',
				isNullable: true,
			})
		);
		await queryRunner.addColumn(
			'comercios',
			new TableColumn({
				name: 'commercialSubcategoryId',
				type: 'int',
				isNullable: true,
			})
		);
		await queryRunner.createForeignKey(
			'comercios',
			new TableForeignKey({
				columnNames: ['commercialCategoryId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'commercialCategories',
			})
		);
		await queryRunner.createForeignKey(
			'comercios',
			new TableForeignKey({
				columnNames: ['commercialSubcategoryId'],
				referencedColumnNames: ['id'],
				referencedTableName: 'commercialSubcategories',
			})
		);
		await queryRunner.query(
			`INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/merchants/commercial-categories', 'GET'),('/v3/admin/merchants/commercial-subcategories', 'GET');`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/merchants/commercial-categories';`
		);
		await queryRunner.query(
			`DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/merchants/commercial-subcategories';`
		);
		const comerciosTable = await queryRunner.getTable('comercios');
		if (comerciosTable) {
			const commercialCategoryFK = comerciosTable.foreignKeys.find(
				(fk) => fk.columnNames.indexOf('commercialCategoryId') !== -1
			);
			const commercialSubcategoryFK = comerciosTable.foreignKeys.find(
				(fk) => fk.columnNames.indexOf('commercialSubcategoryId') !== -1
			);
			if (commercialCategoryFK) {
				await queryRunner.dropForeignKey('comercios', commercialCategoryFK);
			}
			if (commercialSubcategoryFK) {
				await queryRunner.dropForeignKey('comercios', commercialSubcategoryFK);
			}
		}
		await queryRunner.dropColumn('comercios', 'commercialCategoryId');
		await queryRunner.dropColumn('comercios', 'commercialSubcategoryId');
		await queryRunner.dropTable('commercialSubcategories', true, true, true);
		await queryRunner.dropTable('commercialCategories', true, true, true);
	}
}
