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
exports.createProfile1650555824517 = void 0;
var createProfile1650555824517 = /** @class */ (function () {
    function createProfile1650555824517() {
        this.name = 'createProfile1650555824517';
    }
    createProfile1650555824517.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `profile` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `userInfoId` int NULL, `financialDataId` int NULL, `addressId` int NULL, `ccReportesId` int NULL, `seonVerificationId` int NULL, `au10tixId` int NULL, UNIQUE INDEX `REL_0ef76738336c332b55a06902d5` (`userV3Id`), UNIQUE INDEX `REL_92aaf32f3491abc8f398cc7f79` (`userInfoId`), UNIQUE INDEX `REL_f9f0aa2a3192b917f7eeb03f12` (`financialDataId`), UNIQUE INDEX `REL_82e9573eb65966504b27754065` (`addressId`), UNIQUE INDEX `REL_e26abd2ba3424c6a383ee7ad25` (`ccReportesId`), UNIQUE INDEX `REL_cf33c6926802bff849b7798483` (`seonVerificationId`), UNIQUE INDEX `REL_6af25bfb4855f094e4de230c28` (`au10tixId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDocuments` ADD `profileId` int NOT NULL")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_0ef76738336c332b55a06902d53` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_92aaf32f3491abc8f398cc7f793` FOREIGN KEY (`userInfoId`) REFERENCES `profileUserInfo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_f9f0aa2a3192b917f7eeb03f12b` FOREIGN KEY (`financialDataId`) REFERENCES `profileDatosFinancieros`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_82e9573eb65966504b27754065d` FOREIGN KEY (`addressId`) REFERENCES `profileDomicilio`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_e26abd2ba3424c6a383ee7ad257` FOREIGN KEY (`ccReportesId`) REFERENCES `ccReportes`(`idReporte`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_cf33c6926802bff849b77984834` FOREIGN KEY (`seonVerificationId`) REFERENCES `seonVerification`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `FK_6af25bfb4855f094e4de230c28c` FOREIGN KEY (`au10tixId`) REFERENCES `au10tix`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDocuments` ADD CONSTRAINT `FK_bf270df53708ae93deaaa027e52` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createProfile1650555824517.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDocuments` DROP FOREIGN KEY `FK_bf270df53708ae93deaaa027e52`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_6af25bfb4855f094e4de230c28c`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_cf33c6926802bff849b77984834`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_e26abd2ba3424c6a383ee7ad257`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_82e9573eb65966504b27754065d`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_f9f0aa2a3192b917f7eeb03f12b`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_92aaf32f3491abc8f398cc7f793`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `FK_0ef76738336c332b55a06902d53`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDocuments` DROP COLUMN `profileId`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_6af25bfb4855f094e4de230c28` ON `profile`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_cf33c6926802bff849b7798483` ON `profile`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_e26abd2ba3424c6a383ee7ad25` ON `profile`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_82e9573eb65966504b27754065` ON `profile`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_f9f0aa2a3192b917f7eeb03f12` ON `profile`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_92aaf32f3491abc8f398cc7f79` ON `profile`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_0ef76738336c332b55a06902d5` ON `profile`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `profile`")];
                    case 17:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createProfile1650555824517;
}());
exports.createProfile1650555824517 = createProfile1650555824517;
//# sourceMappingURL=1650555824517-createProfile.js.map