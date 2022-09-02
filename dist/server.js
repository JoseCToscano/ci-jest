"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
var typeorm_1 = require("typeorm");
var port = process.env.PORT || 5000;
var App_1 = require("./App");
var dataSourceConfig_1 = require("./config/dataSourceConfig");
var startServer = function () {
    (0, typeorm_1.createConnection)(dataSourceConfig_1.DataSource.getConfig())
        .then(function (conn) { return conn.query('SELECT 1 + 1 AS solution'); })
        .then(function () {
        console.log('[App] Database Ready');
    }).catch(function (e) {
        console.error(e);
    });
    var app = App_1.App.getInstance();
    app.listen(port, function () {
        return console.log("Server listening on port ".concat(port));
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map