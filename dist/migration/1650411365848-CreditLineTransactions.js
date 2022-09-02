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
exports.CreditLineTransactions1650411365848 = void 0;
var CreditLineTransactions1650411365848 = /** @class */ (function () {
    function CreditLineTransactions1650411365848() {
        this.name = 'CreditLineTransactions1650411365848';
    }
    CreditLineTransactions1650411365848.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `creditLineTransactionTypes` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `name` varchar(140) NOT NULL, `description` varchar(140) NOT NULL, `movementType` int NOT NULL, UNIQUE INDEX `IDX_0eeca8316d5520e34dc4c8e286` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `creditLineTransactions` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `isLineActive` int NOT NULL, `baseCreditLine` float NOT NULL, `creditDebt` float NOT NULL, `availableLine` float NOT NULL, `transactionTypeId` int NOT NULL, `creditId` int NULL, `originalTransactionId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `creditLineHistory` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `userV3Id` int NOT NULL, `isLineActive` tinyint NOT NULL DEFAULT 0, `baseCreditLine` float NOT NULL, `creditDebt` float NOT NULL, `availableLine` float NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` ADD `signedViaCreditLine` tinyint NOT NULL DEFAULT 0")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditLineTransactions` ADD CONSTRAINT `FK_a4574a48544fdd701a81b8010f9` FOREIGN KEY (`transactionTypeId`) REFERENCES `creditLineTransactionTypes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditLineTransactions` ADD CONSTRAINT `FK_8e2340b6905059df917e2d33e19` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditLineHistory` ADD CONSTRAINT `FK_d9981859cc888d5936d09f9405c` FOREIGN KEY (`userV3Id`) REFERENCES `usersV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO `creditLineTransactionTypes` (`id`, `name`, `description`, `movementType`) VALUES (1, \"Activaci\u00F3n de l\u00EDnea de cr\u00E9dito\", \"Cuando un evento causa que la l\u00EDnea de cr\u00E9dito se libere al cliente\", 1),(2, \"Desactivaci\u00F3n de l\u00EDnea de cr\u00E9dito\", \"Cuando un evento causa que la l\u00EDnea de cr\u00E9dito se desactive al cliente\", 1),(3, \"C\u00E1lculo de la l\u00EDnea base\", \"Cuando un cliente firma un cr\u00E9dito nuevo la l\u00EDnea base se recalcula con las nuevas variables obtenidas\", 2),(4, \"Cargo a deuda por nuevo cr\u00E9dito\", \"El cliente firma un nuevo cr\u00E9dito, lo cual causa que la deuda de cr\u00E9dito incremente\", 3),(5, \"Cargo a deuda por penalizaciones\", \"El cliente se atrasa en su pago, por lo que se le cobran intereses y comisiones adicionales\", 3),(6, \"Abono a deuda por pago\", \"El cliente pag\u00F3 parte de su saldo insoluto, por lo que la deuda se reduce\", 3),(7, \"Abono a deuda por cancelaci\u00F3n de cr\u00E9dito\", \"El cliente cancel\u00F3 un cr\u00E9dito, por lo que la deuda disminuye\", 3),(8, \"Transacci\u00F3n manual de activaci\u00F3n/desactivaci\u00F3n\", \"El equipo operativo manualmente cambia el estatus de disponibilidad de la linea\", 1),(9, \"Transacci\u00F3n manual de calculo linea base\", \"El equipo operativo manualmente cambia la l\u00EDnea base de un cliente\", 2),(10, \"Transacci\u00F3n manual de cambios en deuda\", \"El equipo operativo manualmente cambia la deuda de un cliente\", 3)")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreditLineTransactions1650411365848.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditLineHistory` DROP FOREIGN KEY `FK_d9981859cc888d5936d09f9405c`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditLineTransactions` DROP FOREIGN KEY `FK_8e2340b6905059df917e2d33e19`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditLineTransactions` DROP FOREIGN KEY `FK_a4574a48544fdd701a81b8010f9`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` DROP COLUMN `signedViaCreditLine`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `creditLineHistory`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `creditLineTransactions`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_0eeca8316d5520e34dc4c8e286` ON `creditLineTransactionTypes`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `creditLineTransactionTypes`")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreditLineTransactions1650411365848;
}());
exports.CreditLineTransactions1650411365848 = CreditLineTransactions1650411365848;
//# sourceMappingURL=1650411365848-CreditLineTransactions.js.map