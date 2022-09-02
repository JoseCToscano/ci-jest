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
exports.PromotionEntityUpdate1649342437402 = void 0;
var typeorm_1 = require("typeorm");
var PromotionEntityUpdate1649342437402 = /** @class */ (function () {
    function PromotionEntityUpdate1649342437402() {
        this.name = 'PromotionEntityUpdate1649342437402';
        this.foreignKeyPromotionId = new typeorm_1.TableForeignKey({
            columnNames: ['promotionId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'promotions',
        });
    }
    PromotionEntityUpdate1649342437402.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.dropColumn('promotions', 'a1InterestRate')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'a2InterestRate')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'a3InterestRate')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'b1InterestRate')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'b2InterestRate')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'b3InterestRate')];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'c1InterestRate')];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'c2InterestRate')];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'c3InterestRate')];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'code')];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'commerceId')];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'commision')];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'endingTime')];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'maxAmount')];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'maxPayments')];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'maxPaymentsElegibility')];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'minAmount')];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'minPayments')];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'minPaymentsElegibility')];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'priority')];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'startingTime')];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'storeId')];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('paymentOptions', 'budgetLimit')];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('paymentOptions', 'isBudgetLimitExceeded')];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'name',
                                type: 'varchar',
                                length: '45',
                                isNullable: false,
                            }))];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'description',
                                type: 'varchar',
                                isNullable: false,
                            }))];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'budgetLimit', type: 'double', isNullable: true }))];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'isBudgetLimitExceeded',
                                type: 'boolean',
                                isNullable: false,
                                default: false,
                            }))];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('paymentOptions', new typeorm_1.TableColumn({ name: 'promotionId', type: 'int', isNullable: true }))];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey('paymentOptions', this.foreignKeyPromotionId)];
                    case 30:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PromotionEntityUpdate1649342437402.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.addColumn('paymentOptions', new typeorm_1.TableColumn({
                            name: 'isBudgetLimitExceeded',
                            type: 'boolean',
                            isNullable: false,
                            default: false,
                        }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('paymentOptions', new typeorm_1.TableColumn({ name: 'budgetLimit', type: 'double', isNullable: true }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'minPaymentsElegibility',
                                type: 'int',
                                isNullable: true,
                            }))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'maxPaymentsElegibility',
                                type: 'int',
                                isNullable: true,
                            }))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'priority', type: 'int', isNullable: false }))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'minPayments', type: 'int', isNullable: true }))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'maxPayments', type: 'int', isNullable: true }))];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'minAmount', type: 'float', isNullable: true }))];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'maxAmount', type: 'float', isNullable: true }))];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'startingTime',
                                type: 'datetime',
                                isNullable: false,
                            }))];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'endingTime',
                                type: 'datetime',
                                isNullable: false,
                            }))];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'commision',
                                type: 'float',
                                isNullable: false,
                                default: 0,
                            }))];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'commerceId', type: 'int', isNullable: true }))];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({ name: 'storeId', type: 'int', isNullable: true }))];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'code',
                                type: 'varchar',
                                length: '100',
                                isNullable: true,
                            }))];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'c3InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'c2InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'c1InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'b3InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'b2InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'b1InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'a3InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'a2InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.addColumn('promotions', new typeorm_1.TableColumn({
                                name: 'a1InterestRate',
                                type: 'float',
                                isNullable: false,
                            }))];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropForeignKey('paymentOptions', this.foreignKeyPromotionId)];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('paymentOptions', 'promotionId')];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'name')];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'isBudgetLimitExceeded')];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'description')];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropColumn('promotions', 'budgetLimit')];
                    case 30:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PromotionEntityUpdate1649342437402;
}());
exports.PromotionEntityUpdate1649342437402 = PromotionEntityUpdate1649342437402;
//# sourceMappingURL=1649342437402-PromotionEntityUpdate.js.map