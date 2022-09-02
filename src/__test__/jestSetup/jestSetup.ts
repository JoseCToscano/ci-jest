import {ConnectionOptions, createConnection, DataSource, DataSourceOptions} from 'typeorm';
import * as fs from 'fs';
import { getJestWorkers } from './jestUtils';
import {Config} from "../../config/dataSourceConfig";

const validateDistFolder = async (): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.readdir('dist', function (err, files) {
			const error = new Error('You should build your app before testing');
			if (
				err?.message === "ENOENT: no such file or directory, scandir 'dist'"
			) {
				return reject(error);
			}
			if (err) {
				return reject(err);
			}
			if (!files.length) {
				return reject(error);
			}
			return resolve();
		});
	});
};

module.exports = async () => {
	await validateDistFolder();
	const config = new Config();
	const {database: testdbsName, ...connectionConfig} = config.getDataSourceConfig();

	const connection = await createConnection(connectionConfig as ConnectionOptions);

	const workersTotal = 1;// getJestWorkers();

	const workers = Array(workersTotal).fill(1);

	await Promise.all(
		workers.map(async (_current, idx) => {
			const workerdb = `${testdbsName}_${idx + 1}`;
			try {
				await connection.query(`DROP DATABASE IF EXISTS ${workerdb};`);
				await connection.query(`CREATE DATABASE ${workerdb};`);
				console.log('Database ', workerdb, ' created')
				const workerDbConnection = new DataSource({...connectionConfig, database: workerdb} as DataSourceOptions)
				await workerDbConnection.initialize();
				await workerDbConnection.runMigrations();
				await workerDbConnection.destroy();
			} catch (err) {
				console.log(err);
				throw err;
			}
		})
	);

	await connection.close();
};
