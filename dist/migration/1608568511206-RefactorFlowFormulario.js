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
exports.RefactorFlowFormulario1608568511206 = void 0;
var RefactorFlowFormulario1608568511206 = /** @class */ (function () {
    function RefactorFlowFormulario1608568511206() {
        this.name = 'RefactorFlowFormulario1608568511206';
    }
    RefactorFlowFormulario1608568511206.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD `stepFormulario` tinyint NOT NULL DEFAULT '0'")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e0112cc0d65204cdc4aaae8bb5`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e04d8756660683a03bf4a72006`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_b2754c29b38bc3b43cd6a2de2b4`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `nombre` `nombre` varchar(45) NULL")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `apellidoPaterno` `apellidoPaterno` varchar(45) NULL")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `email` `email` varchar(45) NULL")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `telefono` `telefono` varchar(45) NULL")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `curp` `curp` varchar(45) NULL")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `fechaNacimiento` `fechaNacimiento` date NULL")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `genero` `genero` int NULL")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `estadoCivil` `estadoCivil` int NULL")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `nivelEstudio` `nivelEstudio` int NULL")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `dependientesEconomicos` `dependientesEconomicos` int NULL")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` DROP FOREIGN KEY `FK_6cc621104d09968b63a879bdfab`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `fuenteIngresos` `fuenteIngresos` int NULL")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `antiguedadIngresos` `antiguedadIngresos` int NULL")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `ingresosMensuales` `ingresosMensuales` double NULL")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_c15f34919f327c8617b68f03ef7`")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_2cad38090ec9548b95f6f409943`")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `tipoDomicilio` `tipoDomicilio` int NULL")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `aniosAntiguedad` `aniosAntiguedad` int NULL")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `estado` `estado` int NULL")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `municipio` `municipio` varchar(45) NULL")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `calle` `calle` varchar(120) NULL")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `numeroExterior` `numeroExterior` varchar(20) NULL")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `codigoPostal` `codigoPostal` varchar(6) NULL")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `colonia` `colonia` varchar(61) NULL")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_7fc049ae97cef89738b6b75c290`")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_4681377d397cbbd4060caa91fed`")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `comercio` `comercio` int NULL")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `sucursal` `sucursal` int NULL")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `numeroPagos` `numeroPagos` int NULL")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `montoSolicitado` `montoSolicitado` double NOT NULL DEFAULT '0'")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `paraQuienProducto` `paraQuienProducto` int NULL")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `descripcion` `descripcion` tinytext NULL")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `importanciaCiclismo` `importanciaCiclismo` int NULL")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e04d8756660683a03bf4a72006` FOREIGN KEY (`estadoCivil`) REFERENCES `staticEstadosCiviles`(`idEstadoCivil`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e0112cc0d65204cdc4aaae8bb5` FOREIGN KEY (`genero`) REFERENCES `staticGeneros`(`idGenero`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_b2754c29b38bc3b43cd6a2de2b4` FOREIGN KEY (`nivelEstudio`) REFERENCES `staticNivelesEstudios`(`idNivelEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` ADD CONSTRAINT `FK_6cc621104d09968b63a879bdfab` FOREIGN KEY (`fuenteIngresos`) REFERENCES `staticTiposIngresos`(`idTipoIngreso`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_2cad38090ec9548b95f6f409943` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_c15f34919f327c8617b68f03ef7` FOREIGN KEY (`tipoDomicilio`) REFERENCES `staticTiposDomicilios`(`idTipoDomicilio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_7fc049ae97cef89738b6b75c290` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_4681377d397cbbd4060caa91fed` FOREIGN KEY (`sucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 45:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RefactorFlowFormulario1608568511206.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP COLUMN `stepFormulario`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_4681377d397cbbd4060caa91fed`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` DROP FOREIGN KEY `FK_7fc049ae97cef89738b6b75c290`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_c15f34919f327c8617b68f03ef7`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` DROP FOREIGN KEY `FK_2cad38090ec9548b95f6f409943`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` DROP FOREIGN KEY `FK_6cc621104d09968b63a879bdfab`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_b2754c29b38bc3b43cd6a2de2b4`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e0112cc0d65204cdc4aaae8bb5`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` DROP FOREIGN KEY `FK_2e04d8756660683a03bf4a72006`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `importanciaCiclismo` `importanciaCiclismo` int NOT NULL")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `descripcion` `descripcion` tinytext NOT NULL")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `paraQuienProducto` `paraQuienProducto` int NOT NULL")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `montoSolicitado` `montoSolicitado` double NOT NULL")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `numeroPagos` `numeroPagos` int NOT NULL")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `sucursal` `sucursal` int NOT NULL")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` CHANGE `comercio` `comercio` int NOT NULL")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_4681377d397cbbd4060caa91fed` FOREIGN KEY (`sucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `solicitudes` ADD CONSTRAINT `FK_7fc049ae97cef89738b6b75c290` FOREIGN KEY (`comercio`) REFERENCES `comercios`(`idComercio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `colonia` `colonia` varchar(61) NOT NULL")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `codigoPostal` `codigoPostal` varchar(6) NOT NULL")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `numeroExterior` `numeroExterior` varchar(20) NOT NULL")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `calle` `calle` varchar(120) NOT NULL")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `municipio` `municipio` varchar(45) NOT NULL")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `estado` `estado` int NOT NULL")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `aniosAntiguedad` `aniosAntiguedad` int NOT NULL")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` CHANGE `tipoDomicilio` `tipoDomicilio` int NOT NULL")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_2cad38090ec9548b95f6f409943` FOREIGN KEY (`estado`) REFERENCES `staticEstadosMexico`(`idEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `domicilios` ADD CONSTRAINT `FK_c15f34919f327c8617b68f03ef7` FOREIGN KEY (`tipoDomicilio`) REFERENCES `staticTiposDomicilios`(`idTipoDomicilio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `ingresosMensuales` `ingresosMensuales` double NOT NULL")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `antiguedadIngresos` `antiguedadIngresos` int NOT NULL")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` CHANGE `fuenteIngresos` `fuenteIngresos` int NOT NULL")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `datosFinancieros` ADD CONSTRAINT `FK_6cc621104d09968b63a879bdfab` FOREIGN KEY (`fuenteIngresos`) REFERENCES `staticTiposIngresos`(`idTipoIngreso`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `dependientesEconomicos` `dependientesEconomicos` int NOT NULL")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `nivelEstudio` `nivelEstudio` int NOT NULL")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `estadoCivil` `estadoCivil` int NOT NULL")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `genero` `genero` int NOT NULL")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `fechaNacimiento` `fechaNacimiento` date NOT NULL")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `curp` `curp` varchar(45) NOT NULL")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `telefono` `telefono` varchar(45) NOT NULL")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `email` `email` varchar(45) NOT NULL")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `apellidoPaterno` `apellidoPaterno` varchar(45) NOT NULL")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` CHANGE `nombre` `nombre` varchar(45) NOT NULL")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_b2754c29b38bc3b43cd6a2de2b4` FOREIGN KEY (`nivelEstudio`) REFERENCES `staticNivelesEstudios`(`idNivelEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e04d8756660683a03bf4a72006` FOREIGN KEY (`estadoCivil`) REFERENCES `staticEstadosCiviles`(`idEstadoCivil`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `usuarios` ADD CONSTRAINT `FK_2e0112cc0d65204cdc4aaae8bb5` FOREIGN KEY (`genero`) REFERENCES `staticGeneros`(`idGenero`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 45:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return RefactorFlowFormulario1608568511206;
}());
exports.RefactorFlowFormulario1608568511206 = RefactorFlowFormulario1608568511206;
//# sourceMappingURL=1608568511206-RefactorFlowFormulario.js.map