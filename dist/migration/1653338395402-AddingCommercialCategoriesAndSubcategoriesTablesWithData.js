"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402 = void 0;
var typeorm_1 = require("typeorm");
var AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402 = /** @class */ (function () {
    function AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402() {
        this.name = 'AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402';
    }
    AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                        }), true, true, true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
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
                            }), true, true, true)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey('commercialSubcategories', new typeorm_1.TableForeignKey({
                                columnNames: ['commercialCategoryId'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'commercialCategories',
                                onDelete: 'CASCADE',
                            }))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO commercialCategories(name) VALUES ('Comercio'),('Deportes y equipo'),('Educaci\u00F3n'),('Electr\u00F3nicos y tecnolog\u00EDa'),('Hogar'),('Moda y accesorios'),('Movilidad'),('Para negocios'),('Salud y belleza'),('Viajes'),('Otro');")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO commercialSubcategories(name, commercialCategoryId) VALUES ('Varios', 1),('Ciclismo', 2),('Ejercicio en casa', 2),('Moda y accesorios', 2),('Cursos', 3),('Celulares', 4),('Computadoras', 4),('Gaming', 4),('Electronica', 4),('Equipos Varios', 4),('Impresoras 3D', 4),('M\u00E1quinas de coser', 4),('M\u00FAsica', 4),('Cocina', 5),('Construcci\u00F3n', 5),('Cortinas', 5),('Ferreteria', 5),('Material para construcci\u00F3n', 5),('Muebles', 5),('Colchones', 5),('Persianas', 5),('Sneakers', 6),('Joyas', 6),('Ropa', 6),('Tatuajes', 6),('Zapatos', 6),('Deportes', 6),('Accesorios', 6),('Accesorios', 7),('Bicicletas el\u00E9ctricas', 7),('Motocicletas', 7),('Motos el\u00E9ctricas', 7),('Equipo restaurantes', 8),('Inventario', 8),('Equipo salud', 8),('Inventario belleza', 8),('Dental', 9),('Skin care', 9),('Moda y Accesorios', 9),('Viajes', 10),('Otro', 11);")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('comercios', new typeorm_1.TableColumn({
                                name: 'commercialCategoryId',
                                type: 'int',
                                isNullable: true,
                            }))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('comercios', new typeorm_1.TableColumn({
                                name: 'commercialSubcategoryId',
                                type: 'int',
                                isNullable: true,
                            }))];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey('comercios', new typeorm_1.TableForeignKey({
                                columnNames: ['commercialCategoryId'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'commercialCategories',
                            }))];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey('comercios', new typeorm_1.TableForeignKey({
                                columnNames: ['commercialSubcategoryId'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'commercialSubcategories',
                            }))];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO rutas(ruta, metodo) VALUES ('/v3/admin/merchants/commercial-categories', 'GET'),('/v3/admin/merchants/commercial-subcategories', 'GET');")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var comerciosTable, commercialCategoryFK, commercialSubcategoryFK;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/merchants/commercial-categories';")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DELETE FROM rutas WHERE rutas.ruta = '/v3/admin/merchants/commercial-subcategories';")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.getTable('comercios')];
                    case 3:
                        comerciosTable = _a.sent();
                        if (!comerciosTable) return [3 /*break*/, 7];
                        commercialCategoryFK = comerciosTable.foreignKeys.find(function (fk) { return fk.columnNames.indexOf('commercialCategoryId') !== -1; });
                        commercialSubcategoryFK = comerciosTable.foreignKeys.find(function (fk) { return fk.columnNames.indexOf('commercialSubcategoryId') !== -1; });
                        if (!commercialCategoryFK) return [3 /*break*/, 5];
                        return [4 /*yield*/, queryRunner.dropForeignKey('comercios', commercialCategoryFK)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!commercialSubcategoryFK) return [3 /*break*/, 7];
                        return [4 /*yield*/, queryRunner.dropForeignKey('comercios', commercialSubcategoryFK)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, queryRunner.dropColumn('comercios', 'commercialCategoryId')];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('comercios', 'commercialSubcategoryId')];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('commercialSubcategories', true, true, true)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('commercialCategories', true, true, true)];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402;
}());
exports.AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402 = AddingCommercialCategoriesAndSubcategoriesTablesWithData1653338395402;
//# sourceMappingURL=1653338395402-AddingCommercialCategoriesAndSubcategoriesTablesWithData.js.map