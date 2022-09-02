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
exports.fillBankInstitutions1635513905216 = void 0;
var fillBankInstitutions1635513905216 = /** @class */ (function () {
    function fillBankInstitutions1635513905216() {
        this.name = 'fillBankInstitutions1635513905216';
    }
    fillBankInstitutions1635513905216.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO `bankingInstitutions` (`id`,`name`) VALUES \n          (2001, 'BANXICO'), \n          (37006, 'BANCOMEXT'), \n          (37009, 'BANOBRAS'), \n          (37019, 'BANJERCITO'), \n          (37135, 'NAFIN'), \n          (37166, 'BANSEFI'), \n          (37168, 'HIPOTECARIA FED'),\n          (40002, 'BANAMEX'),\n          (40012, 'BBVA BANCOMER'),\n          (40014, 'SANTANDER'),\n          (40021, 'HSBC'),\n          (40030, 'BAJIO'),\n          (40036, 'INBURSA'),\n          (40042, 'MIFEL'),\n          (40044, 'SCOTIABANK'),\n          (40058, 'BANREGIO'),\n          (40059, 'INVEX'),\n          (40060, 'BANSI'),\n          (40062, 'AFIRME'),\n          (40072, 'BANORTE'),\n          (40103, 'AMERICAN EXPRES'),\n          (40106, 'BANK OF AMERICA'),\n          (40108, 'MUFG'),\n          (40110, 'JP MORGAN'),\n          (40112, 'BMONEX'),\n          (40113, 'VE POR MAS'),\n          (40124, 'DEUTSCHE'),\n          (40126, 'CREDIT SUISSE'),\n          (40127, 'AZTECA'),\n          (40128, 'AUTOFIN'),\n          (40129, 'BARCLAYS'),\n          (40130, 'COMPARTAMOS'),\n          (40132, 'MULTIVA BANCO'),\n          (40133, 'ACTINVER'),\n          (40136, 'INTERCAM BANCO'),\n          (40137, 'BANCOPPEL'),\n          (40138, 'ABC CAPITAL'),\n          (40140, 'CONSUBANCO'),\n          (40141, 'VOLKSWAGEN'),\n          (40143, 'CIBANCO'),\n          (40145, 'BBASE'),\n          (40147, 'BANKAOOL'),\n          (40148, 'PAGATODO'),\n          (40150, 'INMOBILIARIO'),\n          (40151, 'DONDE'),\n          (40152, 'BANCREA'),\n          (40154, 'BANCO FINTERRA'),\n          (40155, 'ICBC'),\n          (40156, 'SABADELL'),\n          (40157, 'SHINHAN'),\n          (40158, 'MIZUHO BANK'),\n          (40160, 'BANCO S3'),\n          (90600, 'MONEXCB'),\n          (90601, 'GBM'),\n          (90602, 'MASARI'),\n          (90605, 'VALUE'),\n          (90606, 'ESTRUCTURADORES'),\n          (90608, 'VECTOR'),\n          (90613, 'MULTIVA CBOLSA'),\n          (90616, 'FINAMEX'),\n          (90617, 'VALMEX'),\n          (90620, 'PROFUTURO'),\n          (90630, 'CB INTERCAM'),\n          (90631, 'CI BOLSA'),\n          (90634, 'FINCOMUN'),\n          (90636, 'HDI SEGUROS'),\n          (90638, 'AKALA'),\n          (90642, 'REFORMA'),\n          (90646, 'STP'),\n          (90648, 'EVERCORE'),\n          (90652, 'CREDICAPITAL'),\n          (90653, 'KUSPIT'),\n          (90656, 'UNAGRA'),\n          (90659, 'ASP INTEGRA OPC'),\n          (90670, 'LIBERTAD'),\n          (90677, 'CAJA POP MEXICA'),\n          (90680, 'CRISTOBAL COLON'),\n          (90683, 'CAJA TELEFONIST'),\n          (90684, 'TRANSFER'),\n          (90685, 'FONDO (FIRA)'),\n          (90686, 'INVERCAP'),\n          (90689, 'FOMPED'),\n          (90902, 'INDEVAL'),\n          (90903, 'CoDi Valida'),\n          (90814, 'SANTANDER2')\n         ")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    fillBankInstitutions1635513905216.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM bankingInstitutions")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return fillBankInstitutions1635513905216;
}());
exports.fillBankInstitutions1635513905216 = fillBankInstitutions1635513905216;
//# sourceMappingURL=1635513905216-fillBankInstitutions.js.map