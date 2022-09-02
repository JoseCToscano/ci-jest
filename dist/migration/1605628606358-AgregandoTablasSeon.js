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
exports.AgregandoTablasSeon1605628606358 = void 0;
var AgregandoTablasSeon1605628606358 = /** @class */ (function () {
    function AgregandoTablasSeon1605628606358() {
        this.name = 'AgregandoTablasSeon1605628606358';
    }
    AgregandoTablasSeon1605628606358.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonBreachSpecificDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `name` varchar(256) NOT NULL, `domain` varchar(256) NULL, `date` datetime(0) NULL, `breachDetailsId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonDomainDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `domain` varchar(50) NOT NULL, `topLevelDomain` varchar(30) NULL, `created` datetime(0) NULL, `updated` datetime(0) NULL, `expires` datetime(0) NULL, `registered` tinyint NULL, `registrarName` varchar(256) NULL, `registeredTo` varchar(256) NULL, `disposable` tinyint NULL, `free` tinyint NULL, `custom` tinyint NULL, `dmarcEnforced` tinyint NULL, `spfStrict` tinyint NULL, `validMx` tinyint NULL, `acceptAll` tinyint NULL, `suspiciousTld` tinyint NULL, `websiteExists` tinyint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonEmailAccountSpecificDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `socialNetwork` varchar(50) NOT NULL, `photo` varchar(256) NULL, `url` varchar(256) NULL, `location` varchar(100) NULL, `name` varchar(100) NULL, `company` varchar(256) NULL, `title` varchar(256) NULL, `website` varchar(256) NULL, `twitter` varchar(100) NULL, `country` varchar(100) NULL, `city` varchar(100) NULL, `gender` varchar(10) NULL, `idSkype` varchar(100) NULL, `handle` varchar(100) NULL, `bio` varchar(500) NULL, `age` varchar(10) NULL, `language` varchar(100) NULL, `state` varchar(100) NULL, `emailAccountDetailId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonEmailAccountDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `facebook` tinyint NULL, `google` tinyint NULL, `linkedin` tinyint NULL, `skype` tinyint NULL, `apple` tinyint NULL, `ebay` tinyint NULL, `flickr` tinyint NULL, `foursquare` tinyint NULL, `github` tinyint NULL, `gravatar` tinyint NULL, `instagram` tinyint NULL, `lastfm` tinyint NULL, `microsoft` tinyint NULL, `myspace` tinyint NULL, `pinterest` tinyint NULL, `spotify` tinyint NULL, `tumblr` tinyint NULL, `twitter` tinyint NULL, `vimeo` tinyint NULL, `weibo` tinyint NULL, `yahoo` tinyint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonIpDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idReq` varchar(100) NOT NULL, `ip` varchar(100) NOT NULL, `score` double NOT NULL, `country` varchar(100) NULL, `stateProv` varchar(100) NULL, `city` varchar(100) NULL, `timezoneOffset` varchar(100) NULL, `ispName` varchar(256) NULL, `latitude` double NULL, `longitude` double NULL, `type` varchar(100) NULL, `tor` tinyint NULL, `vpn` tinyint NULL, `webProxy` tinyint NULL, `publicProxy` tinyint NULL, `spamNumber` int NULL, UNIQUE INDEX `IDX_a1ceb180c22437f441a2006965` (`idReq`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonPhoneAccountDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `facebook` tinyint NULL, `google` tinyint NULL, `instagram` tinyint NULL, `twitter` tinyint NULL, `yahoo` tinyint NULL, `telegram` tinyint NULL, `telegramLastSeen` datetime(0) NULL, `telegramPhoto` varchar(256) NULL, `whatsapp` tinyint NULL, `whatsappLastSeen` datetime(0) NULL, `whatsappPhoto` varchar(256) NULL, `viber` tinyint NULL, `viberLastSeen` datetime(0) NULL, `viberPhoto` varchar(256) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonPhoneDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idReq` varchar(100) NOT NULL, `idSolicitud` int NOT NULL, `isNumeroPrincipal` tinyint NOT NULL, `telefono` varchar(50) NOT NULL, `valid` tinyint NULL, `type` varchar(50) NULL, `country` varchar(100) NULL, `carrier` varchar(100) NULL, `score` int NOT NULL, `historyHits` int NOT NULL, `historyCustomerHits` int NOT NULL, `historyFirstSeen` datetime(0) NULL, `historyLastSeen` datetime(0) NULL, `accountDetailsId` int NULL, `seonVerificationId` int NULL, UNIQUE INDEX `IDX_462f3af17e44c3a21d20cb04f8` (`idReq`), UNIQUE INDEX `REL_fc015116677d4a3cefe942ce67` (`accountDetailsId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonDeviceDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `type` varchar(100) NULL, `source` varchar(100) NULL, `sessionId` varchar(256) NOT NULL, `adBlock` tinyint NULL, `audioHash` varchar(250) NULL, `batteryCharging` tinyint NULL, `batteryLevel` int NULL, `browserHash` varchar(256) NULL, `browser` varchar(100) NULL, `browserVersion` varchar(100) NULL, `canvasHash` varchar(256) NULL, `cookieEnabled` tinyint NULL, `cookieHash` varchar(256) NULL, `deviceHash` varchar(256) NULL, `deviceMemory` int NULL, `deviceType` varchar(100) NULL, `dnsIp` varchar(256) NULL, `dnsIpCountry` varchar(100) NULL, `dnsIpIsp` varchar(256) NULL, `doNotTrack` tinyint NULL, `flashEnabled` tinyint NULL, `fontCount` int NULL, `fontHash` varchar(256) NULL, `hardwareConcurrency` int NULL, `javaEnabled` tinyint NULL, `deviceIpAddress` varchar(100) NULL, `deviceIpCountry` varchar(100) NULL, `deviceIpIsp` varchar(256) NULL, `os` varchar(50) NULL, `platform` varchar(100) NULL, `pluginCount` int NULL, `pluginHash` varchar(256) NULL, `isPrivate` tinyint NULL, `regionLanguage` varchar(50) NULL, `regionTimezone` varchar(50) NULL, `screenAvailableResolution` varchar(50) NULL, `screenColorDepth` int NULL, `screenPixelRatio` int NULL, `screenResolution` varchar(50) NULL, `touchSupport` tinyint NULL, `userAgent` varchar(250) NULL, `webglHash` varchar(250) NULL, `webglVendor` varchar(150) NULL, `webrtcActivated` tinyint NULL, `webrtcCount` int NULL, `windowSize` varchar(100) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonVerification` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idSolicitud` int NOT NULL, `transcationId` varchar(100) NOT NULL, `seonId` int NOT NULL, `state` varchar(50) NOT NULL, `fraudScore` double NOT NULL, `version` varchar(50) NOT NULL, `calculationTime` int NOT NULL, `ipDetailsId` int NULL, `emailDetailsId` int NULL, `deviceDetailsId` int NULL, UNIQUE INDEX `IDX_3f89be16ae91ec63439664219b` (`idSolicitud`), UNIQUE INDEX `IDX_0a990195a6c8722c52c5238dfd` (`transcationId`), UNIQUE INDEX `IDX_36f5496bcc0cfa8db567a2d63b` (`seonId`), UNIQUE INDEX `REL_6e3cab25df7d1ff368f1d4ff90` (`ipDetailsId`), UNIQUE INDEX `REL_3a3e3619c1cd02b5ad26ef8ac0` (`emailDetailsId`), UNIQUE INDEX `REL_8b53a8691866478001f1473a0f` (`deviceDetailsId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonEmailDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idReq` varchar(150) NOT NULL, `email` varchar(150) NOT NULL, `score` double NOT NULL, `deliverable` tinyint NULL, `historyHits` int NOT NULL, `historyCustomerHits` int NOT NULL, `historyFirstSeen` datetime(0) NULL, `historyLastSeen` datetime(0) NULL, `domainDetailsId` int NULL, `accountDetailsId` int NULL, `breachDetailsId` int NULL, UNIQUE INDEX `IDX_c76d1ef339cd9b1dc1dd672bd9` (`idReq`), UNIQUE INDEX `REL_e5fad52d7e78f73d41cb8c4b23` (`domainDetailsId`), UNIQUE INDEX `REL_216a5f4c397aa49f2329630e4b` (`accountDetailsId`), UNIQUE INDEX `REL_a3d631ba81f7403038385d341b` (`breachDetailsId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `seonBreachDetails` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `haveibeenpwnedListed` tinyint NULL, `numberOfBreaches` int NULL, `firstBreach` datetime(0) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonBreachSpecificDetails` ADD CONSTRAINT `FK_d31da257c4b245458aa8fb6be4e` FOREIGN KEY (`breachDetailsId`) REFERENCES `seonBreachDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailAccountSpecificDetails` ADD CONSTRAINT `FK_beab67dac368fd296a4be89508f` FOREIGN KEY (`emailAccountDetailId`) REFERENCES `seonEmailAccountDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonPhoneDetails` ADD CONSTRAINT `FK_fc015116677d4a3cefe942ce67e` FOREIGN KEY (`accountDetailsId`) REFERENCES `seonPhoneAccountDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonPhoneDetails` ADD CONSTRAINT `FK_d5878e16eedcbd3bbb9f891e5e2` FOREIGN KEY (`seonVerificationId`) REFERENCES `seonVerification`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonVerification` ADD CONSTRAINT `FK_6e3cab25df7d1ff368f1d4ff905` FOREIGN KEY (`ipDetailsId`) REFERENCES `seonIpDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonVerification` ADD CONSTRAINT `FK_3a3e3619c1cd02b5ad26ef8ac05` FOREIGN KEY (`emailDetailsId`) REFERENCES `seonEmailDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonVerification` ADD CONSTRAINT `FK_8b53a8691866478001f1473a0f8` FOREIGN KEY (`deviceDetailsId`) REFERENCES `seonDeviceDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailDetails` ADD CONSTRAINT `FK_e5fad52d7e78f73d41cb8c4b23d` FOREIGN KEY (`domainDetailsId`) REFERENCES `seonDomainDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailDetails` ADD CONSTRAINT `FK_216a5f4c397aa49f2329630e4bf` FOREIGN KEY (`accountDetailsId`) REFERENCES `seonEmailAccountDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailDetails` ADD CONSTRAINT `FK_a3d631ba81f7403038385d341b7` FOREIGN KEY (`breachDetailsId`) REFERENCES `seonBreachDetails`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 21:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AgregandoTablasSeon1605628606358.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailDetails` DROP FOREIGN KEY `FK_a3d631ba81f7403038385d341b7`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailDetails` DROP FOREIGN KEY `FK_216a5f4c397aa49f2329630e4bf`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailDetails` DROP FOREIGN KEY `FK_e5fad52d7e78f73d41cb8c4b23d`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonVerification` DROP FOREIGN KEY `FK_8b53a8691866478001f1473a0f8`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonVerification` DROP FOREIGN KEY `FK_3a3e3619c1cd02b5ad26ef8ac05`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonVerification` DROP FOREIGN KEY `FK_6e3cab25df7d1ff368f1d4ff905`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonPhoneDetails` DROP FOREIGN KEY `FK_d5878e16eedcbd3bbb9f891e5e2`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonPhoneDetails` DROP FOREIGN KEY `FK_fc015116677d4a3cefe942ce67e`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonEmailAccountSpecificDetails` DROP FOREIGN KEY `FK_beab67dac368fd296a4be89508f`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `seonBreachSpecificDetails` DROP FOREIGN KEY `FK_d31da257c4b245458aa8fb6be4e`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonBreachDetails`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_a3d631ba81f7403038385d341b` ON `seonEmailDetails`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_216a5f4c397aa49f2329630e4b` ON `seonEmailDetails`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_e5fad52d7e78f73d41cb8c4b23` ON `seonEmailDetails`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_c76d1ef339cd9b1dc1dd672bd9` ON `seonEmailDetails`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonEmailDetails`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_8b53a8691866478001f1473a0f` ON `seonVerification`")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_3a3e3619c1cd02b5ad26ef8ac0` ON `seonVerification`")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_6e3cab25df7d1ff368f1d4ff90` ON `seonVerification`")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_36f5496bcc0cfa8db567a2d63b` ON `seonVerification`")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_0a990195a6c8722c52c5238dfd` ON `seonVerification`")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_3f89be16ae91ec63439664219b` ON `seonVerification`")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonVerification`")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonDeviceDetails`")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_fc015116677d4a3cefe942ce67` ON `seonPhoneDetails`")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_462f3af17e44c3a21d20cb04f8` ON `seonPhoneDetails`")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonPhoneDetails`")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonPhoneAccountDetails`")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_a1ceb180c22437f441a2006965` ON `seonIpDetails`")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonIpDetails`")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonEmailAccountDetails`")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonEmailAccountSpecificDetails`")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonDomainDetails`")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `seonBreachSpecificDetails`")];
                    case 34:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AgregandoTablasSeon1605628606358;
}());
exports.AgregandoTablasSeon1605628606358 = AgregandoTablasSeon1605628606358;
//# sourceMappingURL=1605628606358-AgregandoTablasSeon.js.map