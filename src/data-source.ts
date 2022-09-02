import "reflect-metadata"
import { DataSource } from "typeorm"
import {Config} from "./config/dataSourceConfig";

const config = new Config();

export const AppDataSource = new DataSource(config.getDataSourceConfig())
