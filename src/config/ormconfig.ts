import {Config} from "./dataSourceConfig";
import {DataSource} from "typeorm";

const config = new Config();

export const dataSource = new DataSource(config.getDataSourceConfig(true));
