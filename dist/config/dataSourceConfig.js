"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
// TODO: Env var file
var DB_HOST = "localhost";
var DB_PORT = "3306";
var DB_USER = "root";
var DB_PASSWORD = "ci_jest_password";
var DB_NAME = "ci_jest_db";
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.prototype.getDataSourceConfig = function (cli) {
        if (cli === void 0) { cli = false; }
        var entitiesStr = cli
            ? 'src/models/**/*.entity{.ts,.js}'
            : 'dist/src/models/**/*.entity.js';
        var migrationsStr = cli
            ? 'src/migration/*.ts'
            : 'dist/src/migration/*.js';
        return {
            type: 'mysql',
            host: DB_HOST,
            port: Number(DB_PORT),
            username: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            synchronize: false,
            entities: [entitiesStr],
            migrationsTableName: 'migration',
            migrations: [migrationsStr],
        };
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=dataSourceConfig.js.map