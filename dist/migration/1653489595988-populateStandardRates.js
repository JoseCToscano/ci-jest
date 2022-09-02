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
exports.populateStandardRates1653489595988 = void 0;
var populateStandardRates1653489595988 = /** @class */ (function () {
    function populateStandardRates1653489595988() {
        this.name = 'populateStandardRates1653489595988';
    }
    populateStandardRates1653489595988.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO `defaultStandardRates` ( `categoryId`, `industryId`,`a1`,`a2`,`a3`,`b1`,`b2`,`b3`,`c1`,`c2`,`c3`)\n         VALUES (1,1,46,52,59,67,73,79,88,94,98),\n                (2,1,46,52,59,67,73,79,88,94,98),\n                (3,1,59,64,69,77,83,89,98,104,108),\n                (4,1,35,39,45,52,58,60,65,70,75),\n                (5,1,38,43,48,55,61,66,71,77,84),\n                (6,2,43,48,53,60,66,71,76,82,89),\n                (7,3,36,41,46,54,61,68,78,85,94),\n                (8,3,39,44,49,57,64,71,85,92,99),\n                (9,3,46,52,59,67,73,79,88,94,98),\n                (10,3,56,65,74,83,89,96,109,119,129),\n                (11,3,79,84,89,99,104,109,119,124,129),\n                (12,4,87,92,97,104,109,114,121,125,129),\n                (13,5,48,54,58,69,75,79,84,89,95),\n                (14,5,38,48,56,62,67,72,77,84,89),\n                (15,6,43,54,59,69,75,81,89,94,99),\n                (16,6,49,56,63,71,77,83,89,94,99),\n                (17,7,79,84,89,99,104,109,119,124,129),\n                (18,7,65,72,78,89,95,99,104,109,114),\n                (19,7,87,92,97,104,109,114,121,125,129),\n                (20,8,43,49,54,61,66,71,77,83,89),\n                (21,9,49,57,65,72,78,84,89,94,99),\n                (22,10,67,73,79,85,91,97,105,112,119),\n                (23,11,56,62,69,77,83,89,98,104,108),\n                (24,11,65,72,78,89,95,99,104,109,114),\n                (25,11,79,84,89,94,99,104,109,114,119),\n                (26,11,67,73,79,85,91,97,105,112,119),\n                (27,11,79,84,89,94,99,104,109,114,119),\n                (28,11,79,84,89,94,99,104,109,114,119),\n                (29,12,87,92,97,104,109,114,121,125,129);")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    populateStandardRates1653489595988.prototype.down = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return populateStandardRates1653489595988;
}());
exports.populateStandardRates1653489595988 = populateStandardRates1653489595988;
//# sourceMappingURL=1653489595988-populateStandardRates.js.map