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
exports.PromotionBudgetContributionsTable1646157360093 = void 0;
var typeorm_1 = require("typeorm");
var PromotionBudgetContributionsTable1646157360093 = /** @class */ (function () {
    function PromotionBudgetContributionsTable1646157360093() {
        this.name = 'PromotionBudgetContributionsTable1646157360093';
    }
    PromotionBudgetContributionsTable1646157360093.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var foreignKeyCredito, foreignKeyPaymentOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: 'promotionBudgetContributions',
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
                                    name: 'amount',
                                    type: 'double',
                                    isNullable: false,
                                },
                                {
                                    name: 'creditoId',
                                    type: 'int',
                                    isNullable: false,
                                },
                                {
                                    name: 'paymentOptionId',
                                    type: 'int',
                                    isNullable: false,
                                },
                            ],
                            indices: [
                                {
                                    name: "IDX_PromotionBudgetContribution_Credito",
                                    isUnique: true,
                                    columnNames: ['creditoId'],
                                },
                                {
                                    name: "IDX_PromotionBudgetContribution_PaymentOption",
                                    isUnique: true,
                                    columnNames: ['paymentOptionId'],
                                },
                            ],
                        }), true, true, true)];
                    case 1:
                        _a.sent();
                        foreignKeyCredito = new typeorm_1.TableForeignKey({
                            columnNames: ['creditoId'],
                            referencedColumnNames: ['id'],
                            referencedTableName: 'creditosV3',
                        });
                        return [4 /*yield*/, queryRunner.createForeignKey('promotionBudgetContributions', foreignKeyCredito)];
                    case 2:
                        _a.sent();
                        foreignKeyPaymentOption = new typeorm_1.TableForeignKey({
                            columnNames: ['paymentOptionId'],
                            referencedColumnNames: ['id'],
                            referencedTableName: 'paymentOptions',
                            name: 'FK_3f5f20132497da36fa8b8dcbf7a',
                        });
                        return [4 /*yield*/, queryRunner.createForeignKey('promotionBudgetContributions', foreignKeyPaymentOption)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromotionBudgetContributionsTable1646157360093.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropTable('promotionBudgetContributions', true, true, true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PromotionBudgetContributionsTable1646157360093;
}());
exports.PromotionBudgetContributionsTable1646157360093 = PromotionBudgetContributionsTable1646157360093;
//# sourceMappingURL=1646157360093-PromotionBudgetContributionsTable.js.map