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
exports.LlenadoTablasStaticV31598632683842 = void 0;
var LlenadoTablasStaticV31598632683842 = /** @class */ (function () {
    function LlenadoTablasStaticV31598632683842() {
    }
    LlenadoTablasStaticV31598632683842.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO tiposMovimientos(clave, descripcion) VALUES ('Cargo', 'Indica un cargo al cr\u00E9dito que debe ser cubierto por el cliente'),('Pago', 'Indica un pago del cliente para abonar al cr\u00E9dito o pagar cargos'),('Inicio prestamo', 'Refleja el monto otorgado como saldo insoluto en el historial de cr\u00E9dito'),('Correcci\u00F3n', 'Indica una correcci\u00F3n por parte de alg\u00FAn administrador directamente en el historial del cr\u00E9dito'),('Ajuste manual', 'Indica un movimiento que se realiz\u00F3 de manera manual');")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO formaPagos(clave, descripcion) VALUES ('OxxoPay', 'Pago en efectivo en OXXO'), ('Conekta-STP', 'Transferencia por Conekta-STP'), ('BBVA Practicaja', 'Pago en efectivo cajero BBVA'), ('BBVA Ventanilla', 'Pago en efectivo ventanilla BBVA'), ('BBVA SPEI', 'SPEI cuenta BBVA'), ('Banregio SPEI', 'SPEI cuenta Banregio'), ('Banregio Ventanilla', 'Pago en efectivo ventanilla Banregio'), ('Otro', '');")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO tiposTransacciones(clave, descripcion, tipoMovimientoId) VALUES ('Inicio pr\u00E9stamo', 'Transacci\u00F3n inicial', 3), ('Cargo parcialidad', 'Transaccion de cargo de una parcialidad segun los montos correspondientes',1), ('Pago a capital', 'Transacci\u00F3n de pago a capital',2), ('Pago de moratorios', 'Transacci\u00F3n de pago de intereses moratorios',2), ('Pago comisiones', 'Transacci\u00F3n de pago de comisiones',2), ('Pago de intereses', 'Transacci\u00F3n de pago de intereses ordinarios',2), ('Abono capital', 'Transacci\u00F3n de abono a capital para reducir saldo insoluto',2), ('Abono saldo a favor', 'Transacci\u00F3n de abono de saldo a favor',2), ('Retiro de saldo a favor', 'Transacci\u00F3n de retiro de saldo a favor',1), ('Comisiones por cierre', 'Transacci\u00F3n de comisiones por cierre',1), ('Migracion cr\u00E9dito', 'Transacci\u00F3n generada al migrar el cr\u00E9dito desde la V2',5), ('Cargo de moratorios', 'Transacci\u00F3n de cargo de intereses moratorios',5), ('Cargo de comisiones', 'Transacci\u00F3n de cargo de comisiones',5);")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO estatusParcialidades(clave, descripcion) VALUES (\"Vigente\", 'Indica que una parcialidad aun est\u00E1 vigente'), (\"Vencido\",'Indica que nua parcialidad se venci\u00F3 y est\u00E1 en atraso'), ('Pagado','Indica que una parcialidad ha sido cubierta en su totalidad');")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO tiposPrestamo(clave, descripcion) VALUES ('AtratoPago', 'Tipo de pr\u00E9stamo tradicional'), ('Efectivo', 'Tipo de pr\u00E9stamo en efectivo para clientes Atrato')")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LlenadoTablasStaticV31598632683842.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM tiposTransacciones;")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DELETE FROM DELETE FROM tiposMovimientos;")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DELETE FROM DELETE FROM tiposPrestamo;")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DELETE FROM estatusParcialidades;")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DELETE FROM formaPagos;")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LlenadoTablasStaticV31598632683842;
}());
exports.LlenadoTablasStaticV31598632683842 = LlenadoTablasStaticV31598632683842;
//# sourceMappingURL=1598632683842-LlenadoTablasStaticV3.js.map