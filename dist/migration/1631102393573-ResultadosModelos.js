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
exports.ResultadosModelos1631102393573 = void 0;
var ResultadosModelos1631102393573 = /** @class */ (function () {
    function ResultadosModelos1631102393573() {
        this.name = 'ResultadosModelos1631102393573';
    }
    ResultadosModelos1631102393573.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE resultadosNorma (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, isRejected tinyint NOT NULL, reason text NULL, UNIQUE INDEX IDX_10a0ce865adadd1649abeea777 (idSolicitud), UNIQUE INDEX REL_10a0ce865adadd1649abeea777 (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE resultadosKarla (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, isApproved tinyint NOT NULL, reason text NULL, UNIQUE INDEX IDX_294182e5d9386b11b5ae267023 (idSolicitud), UNIQUE INDEX REL_294182e5d9386b11b5ae267023 (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE resultadosModeloPreAprobacion (id int NOT NULL AUTO_INCREMENT, fechaCreacion datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, isActive tinyint NOT NULL DEFAULT 1, idSolicitud int NOT NULL, version varchar(60) NULL, score double NULL, thVentanaSuperior float NULL, thVentanaInferior float NULL, decision varchar(25) NULL, UNIQUE INDEX IDX_7c31214ed82c230da0c6bf003e (idSolicitud), UNIQUE INDEX REL_7c31214ed82c230da0c6bf003e (idSolicitud), PRIMARY KEY (id)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE resultadosNorma ADD CONSTRAINT FK_10a0ce865adadd1649abeea7773 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE resultadosKarla ADD CONSTRAINT FK_294182e5d9386b11b5ae2670235 FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE resultadosModeloPreAprobacion ADD CONSTRAINT FK_7c31214ed82c230da0c6bf003ea FOREIGN KEY (idSolicitud) REFERENCES solicitudes(idSolicitud) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultadosModelos1631102393573.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE resultadosModeloPreAprobacion DROP FOREIGN KEY FK_7c31214ed82c230da0c6bf003ea")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE resultadosKarla DROP FOREIGN KEY FK_294182e5d9386b11b5ae2670235")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE resultadosNorma DROP FOREIGN KEY FK_10a0ce865adadd1649abeea7773")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX REL_7c31214ed82c230da0c6bf003e ON resultadosModeloPreAprobacion")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX IDX_7c31214ed82c230da0c6bf003e ON resultadosModeloPreAprobacion")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE resultadosModeloPreAprobacion")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX REL_294182e5d9386b11b5ae267023 ON resultadosKarla")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX IDX_294182e5d9386b11b5ae267023 ON resultadosKarla")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE resultadosKarla")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX REL_10a0ce865adadd1649abeea777 ON resultadosNorma")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX IDX_10a0ce865adadd1649abeea777 ON resultadosNorma")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE resultadosNorma")];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ResultadosModelos1631102393573;
}());
exports.ResultadosModelos1631102393573 = ResultadosModelos1631102393573;
//# sourceMappingURL=1631102393573-ResultadosModelos.js.map