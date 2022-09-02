import {ConnectionOptions, createConnection, DataSource, DataSourceOptions} from 'typeorm';
import {Config} from "../../config/dataSourceConfig";

module.exports = async () => {
	const config = new Config();
	const {database: testdbsName, ...connectionConfig} = config.getDataSourceConfig();

	const connection = await createConnection(connectionConfig as ConnectionOptions);
	const workersTotal = 1 ;// getJestWorkers();

	const workers = Array(workersTotal).fill(1);

	await Promise.all(
		workers.map(async (_current, idx) => {
			try {
			const workerdb = `${testdbsName}_${idx + 1}`;
				const workerDbConnection = new DataSource({...connectionConfig, database: workerdb} as DataSourceOptions)
				await workerDbConnection.initialize();
				await workerDbConnection.dropDatabase();
				await workerDbConnection.destroy();
			} catch (err) {
				console.log(err);
				throw err;
			}
		})
	);

	await connection.close();
	process.exit(0);
};
