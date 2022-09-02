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
exports.StatusVisualizationName1642603018410 = void 0;
var StatusVisualizationName1642603018410 = /** @class */ (function () {
    function StatusVisualizationName1642603018410() {
        this.name = 'StatusVisualizationName1642603018410';
    }
    StatusVisualizationName1642603018410.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE staticBalanceUpdateStatus ADD visualizationName varchar(45) NOT NULL")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE staticBalanceUpdateTypes ADD visualizationName varchar(45) NOT NULL")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE staticBankTransferStatus ADD visualizationName varchar(45) NOT NULL")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBankTransferStatus SET visualizationName =  \"Esperando confirmaci\u00F3n\" WHERE id = 1;")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBankTransferStatus SET visualizationName =  \"En tr\u00E1nsito\" WHERE id = 2;")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBankTransferStatus SET visualizationName =  \"Aplicada\" WHERE id = 3;")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBankTransferStatus SET visualizationName =  \"Cancelada\" WHERE id = 4;")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBankTransferStatus SET visualizationName =  \"Rechazada\" WHERE id = 5;")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateStatus SET visualizationName =  \"Pendiente\" WHERE id = 1;")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateStatus SET visualizationName =  \"En tr\u00E1nsito\" WHERE id = 2;")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateStatus SET visualizationName =  \"Aplicada\" WHERE id = 3;")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateTypes SET visualizationName =  \"Abono\" WHERE id = 1;")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateTypes SET visualizationName =  \"Desembolso\" WHERE id = 2;")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateTypes SET visualizationName =  \"Cancelaci\u00F3n de cr\u00E9dito\" WHERE id = 3;")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateTypes SET visualizationName =  \"Ajuste\" WHERE id = 4;")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateTypes SET visualizationName =  \"Ajuste con actualizaciones\" WHERE id = 5;")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticBalanceUpdateTypes SET visualizationName =  \"Cancelaci\u00F3n de desembolso\" WHERE id = 6;")];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusVisualizationName1642603018410.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE staticBankTransferStatus DROP COLUMN visualizationName")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE staticBalanceUpdateTypes DROP COLUMN visualizationName")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE staticBalanceUpdateStatus DROP COLUMN visualizationName")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return StatusVisualizationName1642603018410;
}());
exports.StatusVisualizationName1642603018410 = StatusVisualizationName1642603018410;
//# sourceMappingURL=1642603018410-StatusVisualizationName.js.map