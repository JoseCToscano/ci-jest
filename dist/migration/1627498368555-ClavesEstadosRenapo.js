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
exports.ClavesEstadosRenapo1627498368555 = void 0;
var ClavesEstadosRenapo1627498368555 = /** @class */ (function () {
    function ClavesEstadosRenapo1627498368555() {
        this.name = 'ClavesEstadosRenapo1627498368555';
    }
    ClavesEstadosRenapo1627498368555.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticEstadosMexico` ADD `claveRenapo` varchar(2)")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticEstadosMexico` ADD UNIQUE INDEX `IDX_c5cbd7390f6988c3c38a811a3e` (`claveRenapo`)")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'AS' WHERE claveEstado = 'AGS' ;")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'BC' WHERE claveEstado = 'BC'	;")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'BS' WHERE claveEstado = 'BCS'	;")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CC' WHERE claveEstado = 'CAMP'	;")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CS' WHERE claveEstado = 'CHIS'	;")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CH' WHERE claveEstado = 'CHIH'	;")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'DF' WHERE claveEstado = 'CDMX'	;")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CL' WHERE claveEstado = 'COAH'	;")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'CM' WHERE claveEstado = 'COL'	;")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'DG' WHERE claveEstado = 'DGO'	;")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'MC' WHERE claveEstado = 'MEX'	;")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'GT' WHERE claveEstado = 'GTO'	;")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'GR' WHERE claveEstado = 'GRO'	;")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'HG' WHERE claveEstado = 'HGO'	;")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'JC' WHERE claveEstado = 'JAL'	;")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'MN' WHERE claveEstado = 'MICH'	;")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'MS' WHERE claveEstado = 'MOR'	;")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'NT' WHERE claveEstado = 'NAY'	;")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'NL' WHERE claveEstado = 'NL'	;")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'OC' WHERE claveEstado = 'OAX'	;")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'PL' WHERE claveEstado = 'PUE'	;")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'QT' WHERE claveEstado = 'QRO'	;")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'QR' WHERE claveEstado = 'QROO'	;")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'SP' WHERE claveEstado = 'SLP'	;")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'SL' WHERE claveEstado = 'SIN'	;")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'SR' WHERE claveEstado = 'SON'	;")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'TC' WHERE claveEstado = 'TAB'	;")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'TS' WHERE claveEstado = 'TAMP'	;")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'TL' WHERE claveEstado = 'TLAX'	;")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'VZ' WHERE claveEstado = 'VER'	;")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'YN' WHERE claveEstado = 'YUC'	;")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query(" UPDATE staticEstadosMexico SET claveRenapo = 'ZS' WHERE claveEstado = 'ZAC'	;")];
                    case 34:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClavesEstadosRenapo1627498368555.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticEstadosMexico` DROP INDEX `IDX_c5cbd7390f6988c3c38a811a3e`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `staticEstadosMexico` DROP COLUMN `claveRenapo`")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ClavesEstadosRenapo1627498368555;
}());
exports.ClavesEstadosRenapo1627498368555 = ClavesEstadosRenapo1627498368555;
//# sourceMappingURL=1627498368555-ClavesEstadosRenapo.js.map