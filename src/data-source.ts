import "reflect-metadata"
import { DataSource } from "typeorm"
import {Config} from "./config/dataSourceConfig";

const config = new Config();
console.log('inside data source: ', config.getDataSourceConfig())
export const AppDataSource = new DataSource(config.getDataSourceConfig())
