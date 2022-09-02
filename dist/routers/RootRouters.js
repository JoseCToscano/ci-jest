"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRouter = void 0;
var express_1 = __importDefault(require("express"));
var RootRouter = /** @class */ (function () {
    function RootRouter() {
        this.getRoot = function (_req, res) { return res.status(200).send('Hello world!'); };
        this.healthCheck = function (_req, res) {
            return res.status(200).send('Server is online!');
        };
        this.router = express_1.default.Router();
        this.router.get('/', this.getRoot);
        this.router.get('/health', this.healthCheck);
    }
    RootRouter.getRouter = function () {
        if (!RootRouter.instance) {
            RootRouter.instance = new RootRouter();
        }
        return RootRouter.instance.router;
    };
    return RootRouter;
}());
exports.RootRouter = RootRouter;
//# sourceMappingURL=RootRouters.js.map