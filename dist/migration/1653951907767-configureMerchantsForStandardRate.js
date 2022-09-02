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
exports.configureMerchantsForStandardRate1653951907767 = void 0;
var configureMerchantsForStandardRate1653951907767 = /** @class */ (function () {
    function configureMerchantsForStandardRate1653951907767() {
        this.name = 'configureMerchantsForStandardRate1653951907767';
    }
    configureMerchantsForStandardRate1653951907767.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(process.env.NODE_ENV !== 'test')) return [3 /*break*/, 2];
                        return [4 /*yield*/, queryRunner.query("UPDATE comercios SET configureStandardRateBanned = true \n                WHERE idComercio IN (413,13,51,130,639,400,343,226,52,94,49,66,70,54,64,330,60,152,15,372,223,419,445,89,67,63,103,6,410,304,247,300,329,423,121,301,344,341,409,306,\n86,309,307,317,299,4,16,65,533,46,69,78,11,53,56,536,57,7,58,10,374,62,61,47,48,117,354,74,40,55,305,327,45,50,640,720,156,352,242)")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    configureMerchantsForStandardRate1653951907767.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("UPDATE comercios SET configureStandardRateBanned = false \n                WHERE idComercio IN (413,13,51,130,639,400,343,226,52,94,49,66,70,54,64,330,60,152,15,372,223,419,445,89,67,63,103,6,410,304,247,300,329,423,121,301,344,341,409,306,\n86,309,307,317,299,4,16,65,533,46,69,78,11,53,56,536,57,7,58,10,374,62,61,47,48,117,354,74,40,55,305,327,45,50,640,720,156,352,242)")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return configureMerchantsForStandardRate1653951907767;
}());
exports.configureMerchantsForStandardRate1653951907767 = configureMerchantsForStandardRate1653951907767;
//# sourceMappingURL=1653951907767-configureMerchantsForStandardRate.js.map