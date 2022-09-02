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
exports.createProfileDireccionesDatosFinacieros1650489634816 = void 0;
var createProfileDireccionesDatosFinacieros1650489634816 = /** @class */ (function () {
    function createProfileDireccionesDatosFinacieros1650489634816() {
        this.name = 'createProfileDireccionesDatosFinacieros1650489634816';
    }
    createProfileDireccionesDatosFinacieros1650489634816.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /**  ProfileDomicilio **/
                    return [4 /*yield*/, queryRunner.query("CREATE TABLE `profileDomicilio` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `aniosAntiguedad` int NULL, `municipio` varchar(45) NULL, `calle` varchar(120) NULL, `numeroExterior` varchar(20) NULL, `numeroInterior` varchar(20) NULL, `codigoPostal` varchar(6) NULL, `colonia` varchar(61) NULL, `ciudad` varchar(61) NULL, `updatedAt` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `tipoDomicilioId` int NULL, `estadoId` int NULL, UNIQUE INDEX `REL_c7419699e895f2db5a5c76358f` (`tipoDomicilioId`), UNIQUE INDEX `REL_4c805413f269f37d4892ec259a` (`estadoId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        /**  ProfileDomicilio **/
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDomicilio` ADD CONSTRAINT `FK_c7419699e895f2db5a5c76358fc` FOREIGN KEY (`tipoDomicilioId`) REFERENCES `staticTiposDomicilios`(`idTipoDomicilio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDomicilio` ADD CONSTRAINT `FK_4c805413f269f37d4892ec259ae` FOREIGN KEY (`estadoId`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        /**  profileDatosFinancieros **/
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `profileDatosFinancieros` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `antiguedadIngresos` int NULL, `nombreComercial` varchar(100) NULL, `ingresosMensuales` double NULL, `gastosMensuales` double NULL, `isAutoempleado` tinyint NULL, `updatedAt` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `fuenteIngresoId` int NULL, `industriaLaboralId` int NULL, UNIQUE INDEX `REL_7711de54c8dc5eb1d4846e2296` (`fuenteIngresoId`), UNIQUE INDEX `REL_a876b8c218803db0b8e1442e8f` (`industriaLaboralId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        /**  profileDatosFinancieros **/
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDatosFinancieros` ADD CONSTRAINT `FK_7711de54c8dc5eb1d4846e22969` FOREIGN KEY (`fuenteIngresoId`) REFERENCES `staticTiposIngresos`(`idTipoIngreso`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDatosFinancieros` ADD CONSTRAINT `FK_a876b8c218803db0b8e1442e8fa` FOREIGN KEY (`industriaLaboralId`) REFERENCES `staticIndustriasLaborales`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createProfileDireccionesDatosFinacieros1650489634816.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /**  ProfileDomicilio **/
                    return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDomicilio` DROP FOREIGN KEY `FK_4c805413f269f37d4892ec259ae`")];
                    case 1:
                        /**  ProfileDomicilio **/
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDomicilio` DROP FOREIGN KEY `FK_c7419699e895f2db5a5c76358fc`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_4c805413f269f37d4892ec259a` ON `profileDomicilio`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_c7419699e895f2db5a5c76358f` ON `profileDomicilio`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `profileDomicilio`")];
                    case 5:
                        _a.sent();
                        /**  profileDatosFinancieros **/
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDatosFinancieros` DROP FOREIGN KEY `FK_a876b8c218803db0b8e1442e8fa`")];
                    case 6:
                        /**  profileDatosFinancieros **/
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDatosFinancieros` DROP FOREIGN KEY `FK_7711de54c8dc5eb1d4846e22969`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_a876b8c218803db0b8e1442e8f` ON `profileDatosFinancieros`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_7711de54c8dc5eb1d4846e2296` ON `profileDatosFinancieros`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `profileDatosFinancieros`")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createProfileDireccionesDatosFinacieros1650489634816;
}());
exports.createProfileDireccionesDatosFinacieros1650489634816 = createProfileDireccionesDatosFinacieros1650489634816;
//# sourceMappingURL=1650489634816-createProfileDireccionesDatosFinacieros.js.map