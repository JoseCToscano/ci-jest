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
exports.MultipaymentTables1653067716348 = void 0;
var MultipaymentTables1653067716348 = /** @class */ (function () {
    function MultipaymentTables1653067716348() {
        this.name = 'MultipaymentTables1653067716348';
    }
    MultipaymentTables1653067716348.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `userV3OxxoPay` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `codigoReferencia` varchar(255) NOT NULL, `pagoMin` int NOT NULL, `pagoMax` int NOT NULL, `creditOwnerId` int NOT NULL, UNIQUE INDEX `IDX_63b1fedf39a1aa66ec6955e514` (`userV3Id`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `userV3SPEI` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `referencia` varchar(255) NOT NULL, `creditOwnerId` int NOT NULL, UNIQUE INDEX `IDX_f7f89668b0720d8f4d0843beb1` (`userV3Id`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `userV3CIE` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `reference` varchar(255) NOT NULL, UNIQUE INDEX `IDX_9ac4574b3c4b4cceaf03b2302c` (`userV3Id`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `userV3Payments` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `idConekta` varchar(60) NULL, `monto` double NOT NULL, `fechaConciliacion` datetime(0) NULL, `fechaPago` datetime(0) NOT NULL, `isAutoconciliado` tinyint NOT NULL DEFAULT 0, `isConciliado` tinyint NOT NULL DEFAULT 0, `isBulk` tinyint NOT NULL DEFAULT 0, `referencia` varchar(50) NOT NULL, `comentario` varchar(1024) NOT NULL, `formaPagoId` int NOT NULL, `adminConciliadorId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` ADD `userV3PaymentId` int NULL")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3OxxoPay` ADD CONSTRAINT `FK_3250fde2b4a56a3527fae283794` FOREIGN KEY (`creditOwnerId`) REFERENCES `creditOwners`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3OxxoPay` ADD CONSTRAINT `FK_63b1fedf39a1aa66ec6955e5140` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3SPEI` ADD CONSTRAINT `FK_f4291abcfeca987a78a2b6330e2` FOREIGN KEY (`creditOwnerId`) REFERENCES `creditOwners`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3SPEI` ADD CONSTRAINT `FK_f7f89668b0720d8f4d0843beb17` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3CIE` ADD CONSTRAINT `FK_9ac4574b3c4b4cceaf03b2302ca` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` ADD CONSTRAINT `FK_deaf97a48db02fdeb92e06ce860` FOREIGN KEY (`userV3PaymentId`) REFERENCES `userV3Payments`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MultipaymentTables1653067716348.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` DROP FOREIGN KEY `FK_deaf97a48db02fdeb92e06ce860`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3Payments` DROP FOREIGN KEY `FK_d9b261f7940ce00303d8bdc4c0a`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3Payments` DROP FOREIGN KEY `FK_e4e077e61d4c9aab4a605c10f0e`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3Payments` DROP FOREIGN KEY `FK_a06cddf92be41384af1b796d33c`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3CIE` DROP FOREIGN KEY `FK_9ac4574b3c4b4cceaf03b2302ca`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3SPEI` DROP FOREIGN KEY `FK_f7f89668b0720d8f4d0843beb17`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3SPEI` DROP FOREIGN KEY `FK_f4291abcfeca987a78a2b6330e2`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3OxxoPay` DROP FOREIGN KEY `FK_63b1fedf39a1aa66ec6955e5140`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `userV3OxxoPay` DROP FOREIGN KEY `FK_3250fde2b4a56a3527fae283794`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` DROP COLUMN `userV3PaymentId`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `userV3Payments`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_9ac4574b3c4b4cceaf03b2302c` ON `userV3CIE`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `userV3CIE`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_f7f89668b0720d8f4d0843beb1` ON `userV3SPEI`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `userV3SPEI`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_63b1fedf39a1aa66ec6955e514` ON `userV3OxxoPay`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `userV3OxxoPay`")];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MultipaymentTables1653067716348;
}());
exports.MultipaymentTables1653067716348 = MultipaymentTables1653067716348;
//# sourceMappingURL=1653067716348-MultipaymentTables.js.map