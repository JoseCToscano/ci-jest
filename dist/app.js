"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var RootRouters_1 = require("./routers/RootRouters");
var App = /** @class */ (function () {
    function App() {
    }
    App.getInstance = function () {
        if (!App.instance) {
            App.instance = (0, express_1.default)();
            App.instance.use((0, cors_1.default)(App.corsOpt));
            App.instance.use('/', RootRouters_1.RootRouter.getRouter());
        }
        return App.instance;
    };
    App.corsOpt = {
        origin: ['*'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map