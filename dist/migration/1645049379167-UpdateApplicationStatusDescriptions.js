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
exports.UpdateApplicationStatusDescriptions1645049379167 = void 0;
var UpdateApplicationStatusDescriptions1645049379167 = /** @class */ (function () {
    function UpdateApplicationStatusDescriptions1645049379167() {
        this.name = 'UpdateApplicationStatusDescriptions1645049379167';
    }
    UpdateApplicationStatusDescriptions1645049379167.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Estado inicial de cualquier solicitud, se crea en pendiente mientras se inicializan los procesos correspondientes.', ordenEstados = 1 WHERE idEstadoSolicitud = 1;")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 0, visibleParaPartners = 0, descripcion = '[DEPRECTAED] Se autentic\u00F3 la solicitud terminada mediante el ingreso correcto del NIP enviado al celular de usuario.', ordenEstados = NULL WHERE idEstadoSolicitud = 2;")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 0, visibleParaPartners = 0, descripcion = '[DEPRECTAED] Aun no se autentic\u00F3 la solicitud terminada, usuario debe ingresar NIP correcto enviado a su celular.', ordenEstados = NULL WHERE idEstadoSolicitud = 3;")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 0, visibleParaPartners = 0, descripcion = '[DEPRECTAED] Solicitud fue autenticada pero esta a la espera de alguna decisi\u00F3n opertiva.', ordenEstados = NULL WHERE idEstadoSolicitud = 6;")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'La solicitud fue creada exitosamente.', ordenEstados = 2 WHERE idEstadoSolicitud = 20;")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el primer paso del formulario.', ordenEstados = 3 WHERE idEstadoSolicitud = 21;")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el segundo paso del formulario.', ordenEstados = 4 WHERE idEstadoSolicitud = 22;")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el tercer paso del formulario.', ordenEstados = 5 WHERE idEstadoSolicitud = 23;")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el cuarto paso del formulario.', ordenEstados = 6 WHERE idEstadoSolicitud = 24;")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el quinto paso del formulario.', ordenEstados = 7 WHERE idEstadoSolicitud = 25;")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Se validaron todos los pasos del formulario exitosamente.', ordenEstados = 8 WHERE idEstadoSolicitud = 26;")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 0, visibleParaPartners = 0, descripcion = '[DEPRECATED] Necesitamos verificar la informaci\u00F3n del cliente y le haremos una llamada para corroborar algunos datos.', ordenEstados = NULL WHERE idEstadoSolicitud = 12;")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo est\u00E1 preparando una oferta con su monto m\u00E1ximo autorizado y su contrato digital.', ordenEstados = 9 WHERE idEstadoSolicitud = 8;")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Este estado sucede cuando se requiere info extra del solicitante.', ordenEstados = 10 WHERE idEstadoSolicitud = 16;")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'El cliente est\u00E1 pre-autorizado, pero a\u00FAn no ha subidos sus documentos en nuestra plataforma. Le enviamos correo con el link a la plataforma para subir documentos. Te recomendamos contactarlo para que contin\u00FAe el proceso y puedas cerrar la venta.', ordenEstados = 11 WHERE idEstadoSolicitud = 4;")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo se encuentra verificando los documentos proporcionados por el cliente, pero a\u00FAn hay documentos que el cliente no ha enviado.', ordenEstados = 12 WHERE idEstadoSolicitud = 11;")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo se encuentra verificando los documentos proporcionados por el cliente.', ordenEstados = 13 WHERE idEstadoSolicitud = 10;")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Los documentos fueron aprobados.', ordenEstados = 14 WHERE idEstadoSolicitud = 27;")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Ya le enviamos su oferta y contrato digital, pero no lo ha firmado. La firma es digital, lo hace entrando a la p\u00E1gina de la oferta que le enviamos al correo al cliente. Te recomendamos contactarlo para que contin\u00FAe el proceso y puedas cerrar la venta.', ordenEstados = 15 WHERE idEstadoSolicitud = 7;")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'El cr\u00E9dito ha sido autorizado ya podemos entregarle su compra por el monto autorizado.', ordenEstados = 16 WHERE idEstadoSolicitud = 9;")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario firm\u00F3 su contrato pero estamos esperando el pago de su enganche para autorizar el cr\u00E9dito.', ordenEstados = 17 WHERE idEstadoSolicitud = 28;")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El cr\u00E9dito pas\u00F3 por todas las etapas de la firma, est\u00E1 activo y autorizado.', ordenEstados = 18 WHERE idEstadoSolicitud = 29;")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Partners marcaron que el producto o la compra ya fue entregado de su lado.', ordenEstados = 19 WHERE idEstadoSolicitud = 18;")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Dinero fue desembolsado por parte de Atrato hacia merchant.', ordenEstados = 20 WHERE idEstadoSolicitud = 19;")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Cliente no autorizado para cr\u00E9dito y rechazado.', ordenEstados = 50 WHERE idEstadoSolicitud = 5;")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Cliente no autorizado para cr\u00E9dito y rechazado autom\u00E1ticamente por modelos.', ordenEstados = 51 WHERE idEstadoSolicitud = 13;")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Cuando el comercio o solicitante tiene alguna queja y el proceso est\u00E1 avanzado ya, entra en disputa.', ordenEstados = 52 WHERE idEstadoSolicitud = 17;")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'La solicitud fue cancelada manualmente por raz\u00F3n ajena a atrato.', ordenEstados = 53 WHERE idEstadoSolicitud = 15;")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'La solicitud fue caducada por inactividad del usuario por m\u00E1s de 15 d\u00EDas.', ordenEstados = 54 WHERE idEstadoSolicitud = 14;")];
                    case 29:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateApplicationStatusDescriptions1645049379167.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Estado inicial de cualquier solicitud, se crea en pendiente mientras se inicializan los procesos correspondientes.', ordenEstados = NULL WHERE idEstadoSolicitud = 1;")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Se autentic\u00F3 la solicitud terminada mediante el ingreso correcto del NIP enviado al celular de usuario.', ordenEstados = NULL WHERE idEstadoSolicitud = 2;")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Aun no se autentic\u00F3 la solicitud terminada, usuario debe ingresar NIP correcto enviado a su celular.', ordenEstados = NULL WHERE idEstadoSolicitud = 3;")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Solicitud fue autenticada pero esta a la espera de alguna decisi\u00F3n opertiva.', ordenEstados = NULL WHERE idEstadoSolicitud = 6;")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'La solicitud fue creada exitosamente.', ordenEstados = NULL WHERE idEstadoSolicitud = 20;")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el primer paso del formulario.', ordenEstados = NULL WHERE idEstadoSolicitud = 21;")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el segundo paso del formulario.', ordenEstados = NULL WHERE idEstadoSolicitud = 22;")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el tercer paso del formulario.', ordenEstados = NULL WHERE idEstadoSolicitud = 23;")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario completo el cuarto paso del formulario.', ordenEstados = NULL WHERE idEstadoSolicitud = 24;")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'El usuario completo el quinto paso del formulario.', ordenEstados = NULL WHERE idEstadoSolicitud = 25;")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Se validaron todos los pasos del formulario exitosamente.', ordenEstados = NULL WHERE idEstadoSolicitud = 26;")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Necesitamos verificar la informaci\u00F3n del cliente y le haremos una llamada para corroborar algunos datos.', ordenEstados = NULL WHERE idEstadoSolicitud = 12;")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo est\u00E1 preparando una oferta con su monto m\u00E1ximo autorizado y su contrato digital.', ordenEstados = NULL WHERE idEstadoSolicitud = 8;")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Este estado sucede cuando se requiere info extra del solicitante.', ordenEstados = NULL WHERE idEstadoSolicitud = 16;")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'El cliente est\u00E1 pre-autorizado, pero a\u00FAn no ha subidos sus documentos en nuestra plataforma. Le enviamos correo con el link a la plataforma para subir documentos. Te recomendamos contactarlo para que contin\u00FAe el proceso y puedas cerrar la venta.', ordenEstados = NULL WHERE idEstadoSolicitud = 4;")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo se encuentra verificando los documentos proporcionados por el cliente, pero a\u00FAn hay documentos que el cliente no ha enviado.', ordenEstados = NULL WHERE idEstadoSolicitud = 11;")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo se encuentra verificando los documentos proporcionados por el cliente.', ordenEstados = NULL WHERE idEstadoSolicitud = 10;")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Nuestro equipo se encuentra verificando los documentos proporcionados por el cliente.', ordenEstados = NULL WHERE idEstadoSolicitud = 10;")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Los documentos fueron aprobados.', ordenEstados = NULL WHERE idEstadoSolicitud = 27;")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'Ya le enviamos su oferta y contrato digital, pero no lo ha firmado. La firma es digital, lo hace entrando a la p\u00E1gina de la oferta que le enviamos al correo al cliente. Te recomendamos contactarlo para que contin\u00FAe el proceso y puedas cerrar la venta.', ordenEstados = NULL WHERE idEstadoSolicitud = 7;")];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 1, descripcion = 'El cr\u00E9dito ha sido autorizado ya podemos entregarle su compra por el monto autorizado.', ordenEstados = NULL WHERE idEstadoSolicitud = 9;")];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El usuario firm\u00F3 su contrato pero estamos esperando el pago de su enganche para autorizar el cr\u00E9dito.', ordenEstados = NULL WHERE idEstadoSolicitud = 28;")];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'El cr\u00E9dito pas\u00F3 por todas las etapas de la firma, est\u00E1 activo y autorizado.', ordenEstados = NULL WHERE idEstadoSolicitud = 29;")];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Partners marcaron que el producto o la compra ya fue entregado de su lado.', ordenEstados = NULL WHERE idEstadoSolicitud = 18;")];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Dinero fue desembolsado por parte de Atrato hacia merchant.', ordenEstados = NULL WHERE idEstadoSolicitud = 19;")];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Cliente no autorizado para cr\u00E9dito y rechazado.', ordenEstados = NULL WHERE idEstadoSolicitud = 5;")];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Cliente no autorizado para cr\u00E9dito y rechazado autom\u00E1ticamente por modelos.', ordenEstados = NULL WHERE idEstadoSolicitud = 13;")];
                    case 27:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'Cuando el comercio o solicitante tiene alguna queja y el proceso est\u00E1 avanzado ya, entra en disputa.', ordenEstados = NULL WHERE idEstadoSolicitud = 17;")];
                    case 28:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'La solicitud fue cancelada manualmente por raz\u00F3n ajena a atrato.', ordenEstados = NULL WHERE idEstadoSolicitud = 15;")];
                    case 29:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("UPDATE staticEstadosSolicitudes SET activo = 1, visibleParaPartners = 0, descripcion = 'La solicitud fue caducada por inactividad del usuario por m\u00E1s de 15 d\u00EDas.', ordenEstados = NULL WHERE idEstadoSolicitud = 14;")];
                    case 30:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UpdateApplicationStatusDescriptions1645049379167;
}());
exports.UpdateApplicationStatusDescriptions1645049379167 = UpdateApplicationStatusDescriptions1645049379167;
//# sourceMappingURL=1645049379167-UpdateApplicationStatusDescriptions.js.map