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
exports.NewFormStatus1640375180035 = void 0;
var NewFormStatus1640375180035 = /** @class */ (function () {
    function NewFormStatus1640375180035() {
        this.name = 'NewFormStatus1640375180035';
    }
    NewFormStatus1640375180035.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (20, 'Solicitud iniciada', 1, 0, 'La solicitud fue creada');")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (21, 'Formulario paso 1', 1, 0, 'El usuario subi\u00F3 el primer paso del formulario');")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (22, 'Formulario paso 2', 1, 0, 'El usuario subi\u00F3 el segundo paso del formulario');")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (23, 'Formulario paso 3', 1, 0, 'El usuario subi\u00F3 el tercer paso del formulario');")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (24, 'Formulario paso 4', 1, 0, 'El usuario subi\u00F3 el cuarto paso del formulario');")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (25, 'Formulario paso 5', 1, 0, 'El usuario subi\u00F3 el quinto paso del formulario');")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("INSERT INTO staticEstadosSolicitudes (idEstadoSolicitud, estadoSolicitud, activo, visibleParaPartners, descripcion) VALUES (26, 'Formulario terminado', 1, 0, 'Se validaron todos los pasos del formulario exitosamente');")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewFormStatus1640375180035.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM staticEstadosSolicitudes WHERE staticEstadosSolicitudes.idEstadoSolicitud IN (20,21,22,23,24,25,26);")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return NewFormStatus1640375180035;
}());
exports.NewFormStatus1640375180035 = NewFormStatus1640375180035;
//# sourceMappingURL=1640375180035-NewFormStatus.js.map