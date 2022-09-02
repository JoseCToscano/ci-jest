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
exports.CreandoTablaPartnersV3WithRelations1621364554446 = void 0;
var CreandoTablaPartnersV3WithRelations1621364554446 = /** @class */ (function () {
    function CreandoTablaPartnersV3WithRelations1621364554446() {
        this.name = 'CreandoTablaPartnersV3WithRelations1621364554446';
    }
    CreandoTablaPartnersV3WithRelations1621364554446.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `partnersV3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `idComercio` int NOT NULL, `username` varchar(100) NOT NULL, `password` varchar(200) NOT NULL, `isEditor` tinyint NOT NULL, `isMaster` tinyint NOT NULL, UNIQUE INDEX `IDX_a3349bb93f4877e57049ab004b` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `partners_v3_sucursales_sucursales` (`partnersV3Id` int NOT NULL, `sucursalesIdSucursal` int NOT NULL, INDEX `IDX_81c8cece185153ce92c2b79958` (`partnersV3Id`), INDEX `IDX_1d27a61514e8d3e1332363e35f` (`sucursalesIdSucursal`), PRIMARY KEY (`partnersV3Id`, `sucursalesIdSucursal`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` ADD CONSTRAINT `FK_81c8cece185153ce92c2b799586` FOREIGN KEY (`partnersV3Id`) REFERENCES `partnersV3`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` ADD CONSTRAINT `FK_1d27a61514e8d3e1332363e35f5` FOREIGN KEY (`sucursalesIdSucursal`) REFERENCES `sucursales`(`idSucursal`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreandoTablaPartnersV3WithRelations1621364554446.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` DROP FOREIGN KEY `FK_1d27a61514e8d3e1332363e35f5`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `partners_v3_sucursales_sucursales` DROP FOREIGN KEY `FK_81c8cece185153ce92c2b799586`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_1d27a61514e8d3e1332363e35f` ON `partners_v3_sucursales_sucursales`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_81c8cece185153ce92c2b79958` ON `partners_v3_sucursales_sucursales`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `partners_v3_sucursales_sucursales`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `partnersV3`")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreandoTablaPartnersV3WithRelations1621364554446;
}());
exports.CreandoTablaPartnersV3WithRelations1621364554446 = CreandoTablaPartnersV3WithRelations1621364554446;
//# sourceMappingURL=1621364554446-CreandoTablaPartnersV3WithRelations.js.map