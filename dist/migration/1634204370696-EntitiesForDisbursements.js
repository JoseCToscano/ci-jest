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
exports.EntitiesForDisbursements1634204370696 = void 0;
var EntitiesForDisbursements1634204370696 = /** @class */ (function () {
    function EntitiesForDisbursements1634204370696() {
        this.name = 'EntitiesForDisbursements1634204370696';
    }
    EntitiesForDisbursements1634204370696.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticBalanceUpdateStatus` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `name` varchar(45) NOT NULL, `description` varchar(300) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `balanceUpdateStatusRecords` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `balanceUpdateId` int NOT NULL, `nextStatus` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticBalanceUpdateTypes` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `name` varchar(45) NOT NULL, `description` varchar(300) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `balanceUpdates` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `amount` double NOT NULL, `previousBalance` double NOT NULL, `actualBalance` double NOT NULL, `comments` text NULL, `storeId` int NOT NULL, `type` int NOT NULL, `status` int NOT NULL, `creditoId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `staticBankTransferStatus` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `name` varchar(45) NOT NULL, `description` varchar(300) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `bankTransfers` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `amount` double NOT NULL, `status` int NOT NULL, `adminSenderId` int NULL, `storeId` int NOT NULL, `comments` text NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `bankTransferStatusRecords` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `bankTransferId` int NOT NULL, `nextStatus` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdateStatusRecords` ADD CONSTRAINT `FK_f09af8585b6e405d4a3c339d6de` FOREIGN KEY (`balanceUpdateId`) REFERENCES `balanceUpdates`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdateStatusRecords` ADD CONSTRAINT `FK_f0514665da288c729a0b74fe985` FOREIGN KEY (`nextStatus`) REFERENCES `staticBalanceUpdateStatus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` ADD CONSTRAINT `FK_cf80268d024bb5d642f1b5b905f` FOREIGN KEY (`storeId`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` ADD CONSTRAINT `FK_cc24407c6422ae61bd36c0f8b17` FOREIGN KEY (`type`) REFERENCES `staticBalanceUpdateTypes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` ADD CONSTRAINT `FK_8d126db79c4413894b922632c56` FOREIGN KEY (`status`) REFERENCES `staticBalanceUpdateStatus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` ADD CONSTRAINT `FK_7ee05ffc3f46b8279c324d11ed0` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransfers` ADD CONSTRAINT `FK_105681e1c44fc05bfa4aadab072` FOREIGN KEY (`status`) REFERENCES `staticBankTransferStatus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransfers` ADD CONSTRAINT `FK_b93feb5092b2f59b3468ac99a9d` FOREIGN KEY (`adminSenderId`) REFERENCES `adminsV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransfers` ADD CONSTRAINT `FK_bb07987bc7fbda9ab14317df9a7` FOREIGN KEY (`storeId`) REFERENCES `sucursales`(`idSucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransferStatusRecords` ADD CONSTRAINT `FK_47d2eef654946ee19d86682363d` FOREIGN KEY (`bankTransferId`) REFERENCES `bankTransfers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransferStatusRecords` ADD CONSTRAINT `FK_145c94cbb25036f3cc72fb4fda4` FOREIGN KEY (`nextStatus`) REFERENCES `staticBankTransferStatus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 18:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EntitiesForDisbursements1634204370696.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransferStatusRecords` DROP FOREIGN KEY `FK_145c94cbb25036f3cc72fb4fda4`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransferStatusRecords` DROP FOREIGN KEY `FK_47d2eef654946ee19d86682363d`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransfers` DROP FOREIGN KEY `FK_bb07987bc7fbda9ab14317df9a7`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransfers` DROP FOREIGN KEY `FK_b93feb5092b2f59b3468ac99a9d`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `bankTransfers` DROP FOREIGN KEY `FK_105681e1c44fc05bfa4aadab072`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` DROP FOREIGN KEY `FK_7ee05ffc3f46b8279c324d11ed0`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` DROP FOREIGN KEY `FK_8d126db79c4413894b922632c56`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` DROP FOREIGN KEY `FK_cc24407c6422ae61bd36c0f8b17`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdates` DROP FOREIGN KEY `FK_cf80268d024bb5d642f1b5b905f`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdateStatusRecords` DROP FOREIGN KEY `FK_f0514665da288c729a0b74fe985`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `balanceUpdateStatusRecords` DROP FOREIGN KEY `FK_f09af8585b6e405d4a3c339d6de`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `bankTransferStatusRecords`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `bankTransfers`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticBankTransferStatus`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `balanceUpdates`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticBalanceUpdateTypes`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `balanceUpdateStatusRecords`")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `staticBalanceUpdateStatus`")];
                    case 18:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EntitiesForDisbursements1634204370696;
}());
exports.EntitiesForDisbursements1634204370696 = EntitiesForDisbursements1634204370696;
//# sourceMappingURL=1634204370696-EntitiesForDisbursements.js.map