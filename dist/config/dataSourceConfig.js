"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
// TODO: Env var file
var DB_HOST = "localhost";
var DB_PORT = "3306";
var DB_USER = "ci_jest_db_user";
var DB_PASSWORD = "ci_jest_db_password";
var DB_NAME = "ci_jest_db";
var DataSource = /** @class */ (function () {
    function DataSource() {
    }
    DataSource.getConfig = function (cli) {
        if (cli === void 0) { cli = false; }
        var dbName = DB_NAME;
        var skipMigrations = false;
        if (process.env.JEST_WORKER_ID) {
            skipMigrations = true;
            dbName += "_".concat(process.env.JEST_WORKER_ID);
        }
        var entitiesStr = cli
            ? 'src/models/**/*.entity{.ts,.js}'
            : 'dist/models/**/*.entity.js';
        var migrations = cli
            ? ['src/migration/*.ts']
            : ['dist/migration/*.js'];
        if (skipMigrations) {
            migrations = [];
        }
        return {
            type: 'mysql',
            host: DB_HOST,
            port: Number(DB_PORT),
            username: DB_USER,
            password: DB_PASSWORD,
            database: dbName,
            synchronize: false,
            entities: [entitiesStr],
            migrationsTableName: 'migration',
            migrations: migrations,
            cli: {
                migrationsDir: 'src/migration',
            },
            charset: 'utf8mb4'
        };
    };
    return DataSource;
}());
exports.DataSource = DataSource;
//# sourceMappingURL=dataSourceConfig.js.map