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
exports.Au10tixImplementation1632328748041 = void 0;
var Au10tixImplementation1632328748041 = /** @class */ (function () {
    function Au10tixImplementation1632328748041() {
        this.name = 'Au10tixImplementation1632328748041';
    }
    Au10tixImplementation1632328748041.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `au10tixResultRemark` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idAu10tixResultData` int NOT NULL, `value` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `au10tixResultData` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idMainAu10tix` int NOT NULL, `isPrimaryResult` tinyint NOT NULL DEFAULT 0, `completionStatus` int NOT NULL, `documentAuthenticity` int NOT NULL, `documentScope` int NOT NULL, `documentSidesCode` int NOT NULL, `primaryProcessingResult` int NOT NULL, `faceCompletionStatus` int NULL, `isDocumentExpired` tinyint NULL, `isDataExtracted` tinyint NULL, `overallQuality` int NULL, `sdrCompletionStatus` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `au10tix` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idSolicitud` int NOT NULL, `au10tixId` int NOT NULL, `token` varchar(100) NOT NULL, `url` varchar(500) NOT NULL, `expiredAt` datetime(0) NOT NULL, `flowCompleted` tinyint NULL DEFAULT 0, `requestId` varchar(100) NULL, `result` varchar(50) NULL, `automaticResult` varchar(50) NULL, `documentType` varchar(50) NULL, `documentId` varchar(100) NOT NULL, `fullName` varchar(100) NULL, `curp` varchar(50) NULL, `livenessAttempts` int NOT NULL, `livenessCompletionStatus` int NOT NULL, `livenessProbability` double NOT NULL, UNIQUE INDEX `IDX_34280c4475eed7397c0d2301b5` (`au10tixId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosRequeridos` ADD `isPostDecisionReviewRequired` tinyint NULL DEFAULT 0")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `au10tixResultRemark` ADD CONSTRAINT `FK_4ee48fd717d4421bfdb1479ec48` FOREIGN KEY (`idAu10tixResultData`) REFERENCES `au10tixResultData`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `au10tixResultData` ADD CONSTRAINT `FK_13f9cf75023ddc444638ffe6d0c` FOREIGN KEY (`idMainAu10tix`) REFERENCES `au10tix`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `au10tix` ADD CONSTRAINT `FK_2390fee2edf4b3007057c8bd027` FOREIGN KEY (`idSolicitud`) REFERENCES `solicitudes`(`idSolicitud`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Au10tixImplementation1632328748041.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `au10tix` DROP FOREIGN KEY `FK_2390fee2edf4b3007057c8bd027`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `au10tixResultData` DROP FOREIGN KEY `FK_13f9cf75023ddc444638ffe6d0c`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `au10tixResultRemark` DROP FOREIGN KEY `FK_4ee48fd717d4421bfdb1479ec48`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `documentosRequeridos` DROP COLUMN `isPostDecisionReviewRequired`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_34280c4475eed7397c0d2301b5` ON `au10tix`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `au10tix`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `au10tixResultData`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `au10tixResultRemark`")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Au10tixImplementation1632328748041;
}());
exports.Au10tixImplementation1632328748041 = Au10tixImplementation1632328748041;
//# sourceMappingURL=1632328748041-Au10tixImplementation.js.map