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
exports.ConektaTables1649288262603 = void 0;
var ConektaTables1649288262603 = /** @class */ (function () {
    function ConektaTables1649288262603() {
        this.name = 'ConektaTables1649288262603';
    }
    ConektaTables1649288262603.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `conektaCharges` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `livemode` tinyint NOT NULL, `chargeId` varchar(255) NOT NULL, `orderId` varchar(255) NOT NULL, `currency` varchar(255) NOT NULL DEFAULT 'MXN', `name` varchar(255) NOT NULL, `expMonth` varchar(255) NOT NULL, `expYear` varchar(255) NOT NULL, `paymentType` varchar(255) NOT NULL, `last4` varchar(255) NOT NULL, `brand` varchar(255) NOT NULL, `issuer` varchar(255) NOT NULL, `accountType` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `amount` int NOT NULL, `status` varchar(255) NOT NULL, `fee` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `conektaTokens` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `livemode` tinyint NOT NULL, `tokenId` varchar(255) NOT NULL, `used` tinyint NOT NULL DEFAULT 0, `customerId` varchar(255) NOT NULL, `checkoutId` varchar(255) NOT NULL, `checkoutCreatedAt` int NOT NULL, `checkoutStartsAt` int NOT NULL, `checkoutExpiresAt` int NOT NULL, UNIQUE INDEX `IDX_9cf3172490aa88a271fe5f228e` (`tokenId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `conektaOrders` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `livemode` tinyint NOT NULL, `orderId` varchar(255) NOT NULL, `customerId` varchar(255) NOT NULL, `amount` int NOT NULL, `currency` varchar(255) NOT NULL DEFAULT 'MXN', `amountRefunded` int NOT NULL, `paymentStatus` varchar(255) NOT NULL, `createdAt` int NOT NULL, `tokenId` varchar(255) NOT NULL, UNIQUE INDEX `IDX_d394b92542dbd087560afcf811` (`orderId`), UNIQUE INDEX `REL_af9fcffac6228eb49e050a3ed1` (`tokenId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `conektaCustomers` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `livemode` tinyint NOT NULL, `customerId` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `createdAt` int NOT NULL, `corporate` tinyint NOT NULL, `userV3Id` int NOT NULL, UNIQUE INDEX `IDX_e5d8891c05e95ac4a8668409d9` (`customerId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaCharges` ADD CONSTRAINT `FK_d04588c2dcdae3e66aca3e2dcd3` FOREIGN KEY (`orderId`) REFERENCES `conektaOrders`(`orderId`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaTokens` ADD CONSTRAINT `FK_0b3e97d3b5f4fbb5780e2fc4061` FOREIGN KEY (`customerId`) REFERENCES `conektaCustomers`(`customerId`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaOrders` ADD CONSTRAINT `FK_b175863252301f2b863ff378828` FOREIGN KEY (`customerId`) REFERENCES `conektaCustomers`(`customerId`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaOrders` ADD CONSTRAINT `FK_af9fcffac6228eb49e050a3ed15` FOREIGN KEY (`tokenId`) REFERENCES `conektaTokens`(`tokenId`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('INSERT IGNORE INTO formaPagos (id, clave, descripcion) VALUES (9, "ConektaCard", "Pago mediante el checkout de conekta con tarjeta")')];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConektaTables1649288262603.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaOrders` DROP FOREIGN KEY `FK_af9fcffac6228eb49e050a3ed15`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaOrders` DROP FOREIGN KEY `FK_b175863252301f2b863ff378828`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaTokens` DROP FOREIGN KEY `FK_0b3e97d3b5f4fbb5780e2fc4061`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `conektaCharges` DROP FOREIGN KEY `FK_d04588c2dcdae3e66aca3e2dcd3`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_e5d8891c05e95ac4a8668409d9` ON `conektaCustomers`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `conektaCustomers`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_af9fcffac6228eb49e050a3ed1` ON `conektaOrders`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_d394b92542dbd087560afcf811` ON `conektaOrders`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `conektaOrders`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_9cf3172490aa88a271fe5f228e` ON `conektaTokens`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `conektaTokens`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `conektaCharges`")];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ConektaTables1649288262603;
}());
exports.ConektaTables1649288262603 = ConektaTables1649288262603;
//# sourceMappingURL=1649288262603-ConektaTables.js.map