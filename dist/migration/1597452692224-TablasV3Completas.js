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
exports.TablasV3Completas1597452692224 = void 0;
var TablasV3Completas1597452692224 = /** @class */ (function () {
    function TablasV3Completas1597452692224() {
        this.name = 'TablasV3Completas1597452692224';
    }
    TablasV3Completas1597452692224.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `rutas` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `ruta` varchar(45) NOT NULL, `metodo` enum ('GET', 'POST', 'PUT', 'DELETE') NOT NULL, UNIQUE INDEX `IDX_edf8326e8dfd4dbf8fe3eec3ee` (`ruta`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `gruposAdmin` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `nombre` varchar(50) NOT NULL, `descripcion` varchar(255) NOT NULL DEFAULT '', PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `tiposPrestamo` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `clave` varchar(40) NOT NULL, `descripcion` varchar(140) NOT NULL DEFAULT '', UNIQUE INDEX `IDX_f9c50ef017a5dfe5a2478a5fde` (`clave`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `historialCreditos` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `saldoInsoluto` double NOT NULL, `deudaCapital` double NOT NULL, `deudaIntereses` double NOT NULL, `comisiones` double NOT NULL, `moratorios` double NOT NULL, `saldoAFavor` double NOT NULL, `isSimulated` tinyint NOT NULL, `isCanceled` tinyint NOT NULL, `creditoId` int NOT NULL, `transaccionId` int NOT NULL, UNIQUE INDEX `REL_69c8ac175d115d7256eb0109d4` (`transaccionId`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `formaPagos` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `clave` varchar(40) NOT NULL, `descripcion` varchar(100) NOT NULL, UNIQUE INDEX `IDX_8dac1560d2e1a614e00b53a52e` (`clave`), UNIQUE INDEX `IDX_0c55c243158cb9407af25d83ca` (`descripcion`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `pagos` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `monto` double NOT NULL, `fechaConciliacion` datetime(0) NOT NULL, `fechaPago` datetime(0) NOT NULL, `isAutoconciliado` tinyint NOT NULL, `referencia` varchar(50) NOT NULL, `comentario` varchar(60) NOT NULL, `creditoId` int NULL, `formaPagoId` int NULL, `conciliadorId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `estatusParcialidades` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `clave` varchar(42) NOT NULL, `descripcion` varchar(100) NOT NULL, UNIQUE INDEX `IDX_4b3e03e28426af96b9ebd5fe9f` (`clave`), UNIQUE INDEX `IDX_c3a4e6dfda112441066648958d` (`descripcion`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `historialParcialidades` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `parcialidadId` int NOT NULL, `estatusParcialidadId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `parcialidades` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `numParcialidad` int NOT NULL, `fechaCobro` datetime(0) NOT NULL, `creditoId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `creditosV3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `solicitud` int NOT NULL, `montoOtorgado` double NOT NULL, `tasaAnual` double NOT NULL, `tasaMoratoria` double NOT NULL, `comisionComercio` double NOT NULL, `numeroParcialidades` int NOT NULL, `fechaPrimerPago` datetime(0) NOT NULL, `comisionAtraso` double NOT NULL, `pagoMensualNeto` double NOT NULL, `isQuincenal` tinyint NOT NULL, `fechaCambioStatus` datetime(0) NOT NULL, `contratoFirmado` int NOT NULL, `cat` double NOT NULL, `tipoPrestamoId` int NOT NULL, `pagosId` int NULL, UNIQUE INDEX `IDX_a11d4125e2fe5f0f04fe03e809` (`solicitud`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `tiposMovimientos` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `clave` varchar(40) NOT NULL, `descripcion` varchar(100) NOT NULL, UNIQUE INDEX `IDX_753b7d9735d6eae0d0646d52da` (`clave`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `tiposTransacciones` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `clave` varchar(45) NOT NULL, `descripcion` varchar(140) NOT NULL, `tipoMovimientoId` int NOT NULL, UNIQUE INDEX `IDX_bb2ed96dc21c43f65b2477dd68` (`clave`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `transacciones` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `saldoInsoluto` int NOT NULL, `deudaCapital` int NOT NULL, `deudaIntereses` int NOT NULL, `comisiones` int NOT NULL, `moratorios` int NOT NULL, `saldoAFavor` int NOT NULL, `comentarios` varchar(140) NOT NULL, `isCanceled` tinyint NOT NULL, `isSimulated` tinyint NOT NULL, `fechaAplicada` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, `creditoId` int NOT NULL, `pagoId` int NULL, `tipoTransaccionId` int NOT NULL, `adminId` int NULL, `parcialidadId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `adminsV3` (`id` int NOT NULL AUTO_INCREMENT, `fechaCreacion` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP, `isActive` tinyint NOT NULL DEFAULT 1, `username` varchar(45) NOT NULL, `password` varchar(200) NOT NULL, `nombre` varchar(45) NOT NULL, `segundoNombre` varchar(45) NULL, `apellidoMaterno` varchar(45) NOT NULL, `apellidoPaterno` varchar(45) NOT NULL, `email` varchar(45) NOT NULL, UNIQUE INDEX `IDX_564943fcfdbaeb7667d16df573` (`username`), UNIQUE INDEX `IDX_0ab94fa5a322ff3fb4d1c300af` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `diasFeriados` (`id` int NOT NULL AUTO_INCREMENT, `fecha` datetime(0) NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `rutas_admin_groups_grupos_admin` (`rutasId` int NOT NULL, `gruposAdminId` int NOT NULL, INDEX `IDX_428873dfd88e75a629708103ba` (`rutasId`), INDEX `IDX_07a85c727cccb0094cadb6355d` (`gruposAdminId`), PRIMARY KEY (`rutasId`, `gruposAdminId`)) ENGINE=InnoDB")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `admins_v3_admin_groups_grupos_admin` (`adminsV3Id` int NOT NULL, `gruposAdminId` int NOT NULL, INDEX `IDX_cc56cbaf2a98df8818327fe912` (`adminsV3Id`), INDEX `IDX_99530754b4eeefcbd9f1df7cf9` (`gruposAdminId`), PRIMARY KEY (`adminsV3Id`, `gruposAdminId`)) ENGINE=InnoDB")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialCreditos` ADD CONSTRAINT `FK_57a4d65c9d0476ca2ceed6be36b` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialCreditos` ADD CONSTRAINT `FK_69c8ac175d115d7256eb0109d4b` FOREIGN KEY (`transaccionId`) REFERENCES `transacciones`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` ADD CONSTRAINT `FK_2eacf668807a62f97c8400c4272` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` ADD CONSTRAINT `FK_c08ea1e2c986ebab6da0c6e3058` FOREIGN KEY (`formaPagoId`) REFERENCES `formaPagos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` ADD CONSTRAINT `FK_51643b5c8d63ac2476b8166cbee` FOREIGN KEY (`conciliadorId`) REFERENCES `adminsV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialParcialidades` ADD CONSTRAINT `FK_e3f71ff98fa915920640b83cbdc` FOREIGN KEY (`parcialidadId`) REFERENCES `parcialidades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialParcialidades` ADD CONSTRAINT `FK_09f2a1c040922c38765e6797f34` FOREIGN KEY (`estatusParcialidadId`) REFERENCES `estatusParcialidades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `parcialidades` ADD CONSTRAINT `FK_b47666683f4e4db732f77b32432` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` ADD CONSTRAINT `FK_368a206f07f17caf5ab84d007ba` FOREIGN KEY (`tipoPrestamoId`) REFERENCES `tiposPrestamo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` ADD CONSTRAINT `FK_8f9714a232701bc66a8ec22c13d` FOREIGN KEY (`pagosId`) REFERENCES `pagos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `tiposTransacciones` ADD CONSTRAINT `FK_360be3d76340effb6cdfdb66263` FOREIGN KEY (`tipoMovimientoId`) REFERENCES `tiposMovimientos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` ADD CONSTRAINT `FK_5c5775f3c94e78f96a1d1bd4d29` FOREIGN KEY (`creditoId`) REFERENCES `creditosV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` ADD CONSTRAINT `FK_f7e1d1f3790c7143b30c990c8b0` FOREIGN KEY (`pagoId`) REFERENCES `pagos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` ADD CONSTRAINT `FK_237eebd2fdef615f8c31ab1c4c8` FOREIGN KEY (`tipoTransaccionId`) REFERENCES `tiposTransacciones`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` ADD CONSTRAINT `FK_9634f1a08932354ded4a8bcd769` FOREIGN KEY (`adminId`) REFERENCES `adminsV3`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` ADD CONSTRAINT `FK_bf608b02934ad0c46b36e5ba217` FOREIGN KEY (`parcialidadId`) REFERENCES `parcialidades`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rutas_admin_groups_grupos_admin` ADD CONSTRAINT `FK_428873dfd88e75a629708103bac` FOREIGN KEY (`rutasId`) REFERENCES `rutas`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rutas_admin_groups_grupos_admin` ADD CONSTRAINT `FK_07a85c727cccb0094cadb6355dc` FOREIGN KEY (`gruposAdminId`) REFERENCES `gruposAdmin`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `admins_v3_admin_groups_grupos_admin` ADD CONSTRAINT `FK_cc56cbaf2a98df8818327fe9127` FOREIGN KEY (`adminsV3Id`) REFERENCES `adminsV3`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `admins_v3_admin_groups_grupos_admin` ADD CONSTRAINT `FK_99530754b4eeefcbd9f1df7cf95` FOREIGN KEY (`gruposAdminId`) REFERENCES `gruposAdmin`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 37:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TablasV3Completas1597452692224.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `admins_v3_admin_groups_grupos_admin` DROP FOREIGN KEY `FK_99530754b4eeefcbd9f1df7cf95`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `admins_v3_admin_groups_grupos_admin` DROP FOREIGN KEY `FK_cc56cbaf2a98df8818327fe9127`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rutas_admin_groups_grupos_admin` DROP FOREIGN KEY `FK_07a85c727cccb0094cadb6355dc`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rutas_admin_groups_grupos_admin` DROP FOREIGN KEY `FK_428873dfd88e75a629708103bac`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` DROP FOREIGN KEY `FK_bf608b02934ad0c46b36e5ba217`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` DROP FOREIGN KEY `FK_9634f1a08932354ded4a8bcd769`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` DROP FOREIGN KEY `FK_237eebd2fdef615f8c31ab1c4c8`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` DROP FOREIGN KEY `FK_f7e1d1f3790c7143b30c990c8b0`")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `transacciones` DROP FOREIGN KEY `FK_5c5775f3c94e78f96a1d1bd4d29`")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `tiposTransacciones` DROP FOREIGN KEY `FK_360be3d76340effb6cdfdb66263`")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` DROP FOREIGN KEY `FK_8f9714a232701bc66a8ec22c13d`")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `creditosV3` DROP FOREIGN KEY `FK_368a206f07f17caf5ab84d007ba`")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `parcialidades` DROP FOREIGN KEY `FK_b47666683f4e4db732f77b32432`")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialParcialidades` DROP FOREIGN KEY `FK_09f2a1c040922c38765e6797f34`")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialParcialidades` DROP FOREIGN KEY `FK_e3f71ff98fa915920640b83cbdc`")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` DROP FOREIGN KEY `FK_51643b5c8d63ac2476b8166cbee`")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` DROP FOREIGN KEY `FK_c08ea1e2c986ebab6da0c6e3058`")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `pagos` DROP FOREIGN KEY `FK_2eacf668807a62f97c8400c4272`")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialCreditos` DROP FOREIGN KEY `FK_69c8ac175d115d7256eb0109d4b`")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `historialCreditos` DROP FOREIGN KEY `FK_57a4d65c9d0476ca2ceed6be36b`")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_99530754b4eeefcbd9f1df7cf9` ON `admins_v3_admin_groups_grupos_admin`")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_cc56cbaf2a98df8818327fe912` ON `admins_v3_admin_groups_grupos_admin`")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `admins_v3_admin_groups_grupos_admin`")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_07a85c727cccb0094cadb6355d` ON `rutas_admin_groups_grupos_admin`")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_428873dfd88e75a629708103ba` ON `rutas_admin_groups_grupos_admin`")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `rutas_admin_groups_grupos_admin`")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `diasFeriados`")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_0ab94fa5a322ff3fb4d1c300af` ON `adminsV3`")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_564943fcfdbaeb7667d16df573` ON `adminsV3`")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `adminsV3`")];
                    case 30:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `transacciones`")];
                    case 31:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_bb2ed96dc21c43f65b2477dd68` ON `tiposTransacciones`")];
                    case 32:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `tiposTransacciones`")];
                    case 33:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_753b7d9735d6eae0d0646d52da` ON `tiposMovimientos`")];
                    case 34:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `tiposMovimientos`")];
                    case 35:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_a11d4125e2fe5f0f04fe03e809` ON `creditosV3`")];
                    case 36:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `creditosV3`")];
                    case 37:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `parcialidades`")];
                    case 38:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `historialParcialidades`")];
                    case 39:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_c3a4e6dfda112441066648958d` ON `estatusParcialidades`")];
                    case 40:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_4b3e03e28426af96b9ebd5fe9f` ON `estatusParcialidades`")];
                    case 41:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `estatusParcialidades`")];
                    case 42:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `pagos`")];
                    case 43:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_0c55c243158cb9407af25d83ca` ON `formaPagos`")];
                    case 44:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_8dac1560d2e1a614e00b53a52e` ON `formaPagos`")];
                    case 45:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `formaPagos`")];
                    case 46:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `REL_69c8ac175d115d7256eb0109d4` ON `historialCreditos`")];
                    case 47:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `historialCreditos`")];
                    case 48:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_f9c50ef017a5dfe5a2478a5fde` ON `tiposPrestamo`")];
                    case 49:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `tiposPrestamo`")];
                    case 50:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `gruposAdmin`")];
                    case 51:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_edf8326e8dfd4dbf8fe3eec3ee` ON `rutas`")];
                    case 52:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `rutas`")];
                    case 53:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return TablasV3Completas1597452692224;
}());
exports.TablasV3Completas1597452692224 = TablasV3Completas1597452692224;
//# sourceMappingURL=1597452692224-TablasV3Completas.js.map