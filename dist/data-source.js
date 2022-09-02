"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dataSourceConfig_1 = require("./config/dataSourceConfig");
var config = new dataSourceConfig_1.Config();
exports.AppDataSource = new typeorm_1.DataSource(config.getDataSourceConfig());
//# sourceMappingURL=data-source.js.map