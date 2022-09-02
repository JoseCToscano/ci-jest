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
exports.AgregandoStatusCredito1604514189134 = void 0;
var AgregandoStatusCredito1604514189134 = /** @class */ (function () {
    function AgregandoStatusCredito1604514189134() {
        this.name = 'AgregandoStatusCredito1604514189134';
    }
    AgregandoStatusCredito1604514189134.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` ADD `status` varchar(20) NOT NULL DEFAULT 'Vigente'")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE `creditosV3` SET `status`= 'Cerrado' WHERE isActive = 0;")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE `creditosV3` SET `isActive`= 1;")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE `creditosV3` SET `status`= 'Manual' WHERE id IN (12,31,36,77,78,93,135,140,169,178,182,194,145,727,155,100,167,153,728,726,15,163,172,177,192,724,223,87,53,162,183,65,80,164,108,48,71,82,165,57,127,227,79,185,208,209,205,201,20,229,228,723,101,50,159,380,725,190,81,85,184);")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AgregandoStatusCredito1604514189134.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `status`")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AgregandoStatusCredito1604514189134;
}());
exports.AgregandoStatusCredito1604514189134 = AgregandoStatusCredito1604514189134;
//# sourceMappingURL=1604514189134-AgregandoStatusCredito.js.map