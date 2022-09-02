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
exports.TestEntities1604344969803 = void 0;
var TestEntities1604344969803 = /** @class */ (function () {
    function TestEntities1604344969803() {
        this.name = 'TestEntities1604344969803';
    }
    TestEntities1604344969803.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(process.env.NODE_ENV === "test")) return [3 /*break*/, 9];
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `entityTest5` (`idEntity` int NOT NULL AUTO_INCREMENT, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, `parentId` int NULL, UNIQUE INDEX `IDX_78e6a362f80e4fb3fce8649739` (`entityNumber`), UNIQUE INDEX `IDX_ac33ae8a6adfeb5b6d755c93d8` (`entityName`), PRIMARY KEY (`idEntity`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('CREATE TABLE `entityTest2` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, `parentId` int NULL, UNIQUE INDEX `IDX_47bcb5f551b181e99417badb45` (`entityNumber`), UNIQUE INDEX `IDX_3568f9bac36c558be51710f94a` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('CREATE TABLE `entityTest4` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, UNIQUE INDEX `IDX_95d30ccd6b1f21687d87cf8ece` (`entityNumber`), UNIQUE INDEX `IDX_f317651eaa0f7efa244654de76` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('CREATE TABLE `entityTest3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, UNIQUE INDEX `IDX_95d30ccd6b1f21687d87cf8ece` (`entityNumber`), UNIQUE INDEX `IDX_f317651eaa0f7efa244654de76` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('CREATE TABLE `entityTest1` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `entityNumber` int NOT NULL, `entityName` varchar(255) NOT NULL, `parentId` int NULL, UNIQUE INDEX `IDX_d6483a4314f88388e026d86f53` (`entityNumber`), UNIQUE INDEX `IDX_c7d58a067c44ea0c89817cd0f5` (`entityName`), PRIMARY KEY (`id`)) ENGINE=InnoDB')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `entityTest5` ADD CONSTRAINT `FK_828d520b9553af158f6e45b8d8a` FOREIGN KEY (`parentId`) REFERENCES `entityTest3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('ALTER TABLE `entityTest2` ADD CONSTRAINT `FK_0f7a7d37b371468ef7cc7c4ca8a` FOREIGN KEY (`parentId`) REFERENCES `entityTest1`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query('ALTER TABLE `entityTest1` ADD CONSTRAINT `FK_9f788c6fb4ce819f0e7de07570b` FOREIGN KEY (`parentId`) REFERENCES `entityTest3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    TestEntities1604344969803.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `entityTest5` DROP FOREIGN KEY `FK_828d520b9553af158f6e45b8d8a`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_ac33ae8a6adfeb5b6d755c93d8` ON `entityTest5`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_78e6a362f80e4fb3fce8649739` ON `entityTest5`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `entityTest5`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `entityTest1` DROP FOREIGN KEY `FK_9f788c6fb4ce819f0e7de07570b`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `entityTest2` DROP FOREIGN KEY `FK_0f7a7d37b371468ef7cc7c4ca8a`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_c7d58a067c44ea0c89817cd0f5` ON `entityTest1`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_d6483a4314f88388e026d86f53` ON `entityTest1`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `entityTest1`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_f317651eaa0f7efa244654de76` ON `entityTest3`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_95d30ccd6b1f21687d87cf8ece` ON `entityTest3`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `entityTest3`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_3568f9bac36c558be51710f94a` ON `entityTest2`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_47bcb5f551b181e99417badb45` ON `entityTest2`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `entityTest2`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `entityTest4`")];
                    case 16:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TestEntities1604344969803;
}());
exports.TestEntities1604344969803 = TestEntities1604344969803;
//# sourceMappingURL=1604344969803-TestEntities.js.map