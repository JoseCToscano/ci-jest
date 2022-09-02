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
exports.CommercesV31630078120177 = void 0;
var CommercesV31630078120177 = /** @class */ (function () {
    function CommercesV31630078120177() {
        this.name = 'CommercesV31630078120177';
    }
    CommercesV31630078120177.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `paymentsPerStore` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `numberOfPayments` int NOT NULL, `storeId` int NOT NULL, `commision` float NOT NULL DEFAULT '0', PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `promotions` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `a1InterestRate` float NOT NULL, `a2InterestRate` float NOT NULL, `a3InterestRate` float NOT NULL, `b1InterestRate` float NOT NULL, `b2InterestRate` float NOT NULL, `b3InterestRate` float NOT NULL, `c1InterestRate` float NOT NULL, `c2InterestRate` float NOT NULL, `c3InterestRate` float NOT NULL, `commision` float NOT NULL DEFAULT '0', `startingTime` datetime(0) NOT NULL, `endingTime` datetime(0) NOT NULL, `priority` int NOT NULL, `storeId` int NOT NULL, `commerceId` int NOT NULL, `code` varchar(100) NOT NULL, `minPayments` int NOT NULL, `maxPayments` int NOT NULL, `minPaymentsElegibility` int NOT NULL, `maxPaymentsElegibility` int NOT NULL, `minAmount` float NOT NULL, `maxAmount` float NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `comentariosTasaAcordada` varchar(45) NULL")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaA1` float NOT NULL")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaA2` float NOT NULL")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaA3` float NOT NULL")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaB1` float NOT NULL")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaB2` float NOT NULL")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaB3` float NOT NULL")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaC1` float NOT NULL")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaC2` float NOT NULL")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` ADD `tasaC3` float NOT NULL")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `paymentsPerStore` ADD CONSTRAINT `FK_3d3c770124af31a6d64355b6893` FOREIGN KEY (`storeId`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommercesV31630078120177.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `paymentsPerStore` DROP FOREIGN KEY `FK_3d3c770124af31a6d64355b6893`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaC3`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaC2`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaC1`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaB3`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaB2`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaB1`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaA3`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaA2`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `tasaA1`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `sucursales` DROP COLUMN `comentariosTasaAcordada`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `promotions`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `paymentsPerStore`")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommercesV31630078120177;
}());
exports.CommercesV31630078120177 = CommercesV31630078120177;
//# sourceMappingURL=1630078120177-CommercesV3.js.map