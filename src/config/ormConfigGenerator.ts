import * as fs from 'fs';
import {DataSource} from "./dataSourceConfig";


fs.writeFileSync(
	'ormconfig.json',
	JSON.stringify(DataSource.getConfig(true))
);
