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
exports.WebhookEventsWebhookEventsLogs1634858363889 = void 0;
var WebhookEventsWebhookEventsLogs1634858363889 = /** @class */ (function () {
    function WebhookEventsWebhookEventsLogs1634858363889() {
        this.name = 'WebhookEventsWebhookEventsLogs1634858363889';
    }
    WebhookEventsWebhookEventsLogs1634858363889.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `webhookEvents` (`id` int NOT NULL AUTO_INCREMENT, `idComercio` int NOT NULL, `idSucursal` int NOT NULL, `idSolicitud` int NOT NULL, `idCredito` int NULL, `idOrden` varchar(150) NULL, `url` varchar(150) NOT NULL, `verb` varchar(20) NOT NULL, `payload` text NOT NULL, `status` varchar(50) NOT NULL, `responseData` text NULL, `responseCode` int NULL, `active` tinyint NOT NULL DEFAULT 1, `retries` int NOT NULL DEFAULT '4', `executionDate` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `creationDate` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `nextExecution` datetime(0) NULL, `eventType` varchar(50) NULL, `eventSubType` varchar(50) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `webhookEventsLogs` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `responseData` text NULL, `responseCode` int NULL, `success` tinyint NOT NULL, `retryNumber` int NOT NULL, `webhookEventsId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE  `webhookEventsLogs` ADD CONSTRAINT `FK_718685351fbe630e083e37c6dad` FOREIGN KEY (`webhookEventsId`) REFERENCES `webhookEvents`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebhookEventsWebhookEventsLogs1634858363889.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `webhookEventsLogs` DROP FOREIGN KEY `FK_718685351fbe630e083e37c6dad`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `webhookEventsLogs`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `webhookEvents`")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return WebhookEventsWebhookEventsLogs1634858363889;
}());
exports.WebhookEventsWebhookEventsLogs1634858363889 = WebhookEventsWebhookEventsLogs1634858363889;
//# sourceMappingURL=1634858363889-WebhookEvents_WebhookEventsLogs.js.map