"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJestWorkers = void 0;
var os_1 = __importDefault(require("os"));
function getJestWorkers() {
    var cpus = os_1.default.cpus().length;
    var MAX_AVAILABLE_THREADS = String(Math.max(cpus - 1, 1));
    return parseInt(process.env.MAX_WORKERS ||
        process.env.JEST_WORKERS ||
        MAX_AVAILABLE_THREADS, 10);
}
exports.getJestWorkers = getJestWorkers;
//# sourceMappingURL=jestUtils.js.map