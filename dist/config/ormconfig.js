"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var dataSourceConfig_1 = require("./dataSourceConfig");
var typeorm_1 = require("typeorm");
var config = new dataSourceConfig_1.Config();
exports.dataSource = new typeorm_1.DataSource(config.getDataSourceConfig(true));
//# sourceMappingURL=ormconfig.js.map