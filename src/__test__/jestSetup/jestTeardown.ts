import { createConnection,} from 'typeorm';
import {Config} from "../../config/dataSourceConfig";

module.exports = async () => {
	const config = new Config();
	const {database, ...connectionConfig} = config.getDataSourceConfig();

	const connection = await createConnection(connectionConfig);
	const workersTotal = 1 ;// getJestWorkers();

	const workers = Array(workersTotal).fill(1);

	await Promise.all(
		workers.map(async (_current, idx) => {
			try {
			const workerdb = `${database}_${idx + 1}`;
				await connection.query(`DROP DATABASE IF EXISTS ${workerdb};`);
			} catch (err) {
				console.log(err);
				throw err;
			}
		})
	);

	await connection.close();
	process.exit(0);
};
