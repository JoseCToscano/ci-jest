import * as fs from 'fs';
import {Config} from "./dataSourceConfig";

const config = new Config();

fs.writeFileSync(
	'ormconfig.json',
	JSON.stringify(config.getDataSourceConfig(true))
);
