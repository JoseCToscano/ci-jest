import {ConnectionOptions, createConnection, DataSource, DataSourceOptions} from 'typeorm';
import {Config} from "../../config/dataSourceConfig";

module.exports = async () => {
	const config = new Config();
	const {database: testdbsName, ...connectionConfig} = config.getDataSourceConfig();

	const connection = await createConnection(connectionConfig as ConnectionOptions);

	const workers = 1 ;// getJestWorkers();

	for (let i = 1; i <= workers; i++) {
		const workerdb = `${testdbsName}_${i}`;
		const workerDbConnection = new DataSource({...connectionConfig, database: workerdb} as DataSourceOptions)
		await workerDbConnection.initialize();
		await workerDbConnection.dropDatabase();
		await workerDbConnection.destroy();
	}

	await connection.close();
	process.exit(0);
};
