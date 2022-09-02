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
exports.profileDocsAndUser1650548818194 = void 0;
var profileDocsAndUser1650548818194 = /** @class */ (function () {
    function profileDocsAndUser1650548818194() {
        this.name = 'profileDocsAndUser1650548818194';
    }
    profileDocsAndUser1650548818194.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `profileDocuments` (`id` int NOT NULL AUTO_INCREMENT, `documentTypeId` int NOT NULL, `s3Key` varchar(300) NOT NULL, `updatedAt` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `profileUserInfo` (`id` int NOT NULL AUTO_INCREMENT, `genderId` int NOT NULL, `educationId` int NOT NULL, `civilStatusId` int NOT NULL, `birthDate` date NOT NULL, `altPhoneNumber` varchar(20) NULL, `economicDependents` int NOT NULL, `updatedAt` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDocuments` ADD CONSTRAINT `FK_ecc07288e660cfc5344a48aa002` FOREIGN KEY (`documentTypeId`) REFERENCES `staticTiposDocumentos`(`idTipoDocumentos`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileUserInfo` ADD CONSTRAINT `FK_ba11659b3575f1196b77169d8c5` FOREIGN KEY (`genderId`) REFERENCES `staticGeneros`(`idGenero`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileUserInfo` ADD CONSTRAINT `FK_b19f23887a0234cb069bb073766` FOREIGN KEY (`educationId`) REFERENCES `staticNivelesEstudios`(`idNivelEstudio`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileUserInfo` ADD CONSTRAINT `FK_4463bd0f2db91d1bbfbc1f9300e` FOREIGN KEY (`civilStatusId`) REFERENCES `staticEstadosCiviles`(`idEstadoCivil`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    profileDocsAndUser1650548818194.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileUserInfo` DROP FOREIGN KEY `FK_4463bd0f2db91d1bbfbc1f9300e`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileUserInfo` DROP FOREIGN KEY `FK_b19f23887a0234cb069bb073766`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileUserInfo` DROP FOREIGN KEY `FK_ba11659b3575f1196b77169d8c5`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `profileDocuments` DROP FOREIGN KEY `FK_ecc07288e660cfc5344a48aa002`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `profileUserInfo`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `profileDocuments`")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return profileDocsAndUser1650548818194;
}());
exports.profileDocsAndUser1650548818194 = profileDocsAndUser1650548818194;
//# sourceMappingURL=1650548818194-profileDocsAndUser.js.map