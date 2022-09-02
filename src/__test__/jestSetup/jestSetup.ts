import {ConnectionOptions, createConnection, DataSource, DataSourceOptions} from 'typeorm';
import * as fs from 'fs';
import { getJestWorkers } from './jestUtils';
import {Config} from "../../config/dataSourceConfig";
import {AppDataSource} from "../../data-source";

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
				return reject(err);nfig
			}
			if (!files.length) {
				return reject(error);
			}
			return resolve();
		});
	});
};

module.exports = async () => {
	console.log('Ola')
	await validateDistFolder();
	console.log('Ola 2')
	const config = new Config();
	const {database: testdbsName, ...connectionConfig} = config.getDataSourceConfig();
	console.log('Ola 3')

	const connection = await createConnection(connectionConfig as ConnectionOptions);

	console.log('Ola 4')
	const workersTotal = 1;// getJestWorkers();

	const workers = Array(workersTotal).fill(1);
	await Promise.all(
		workers.map(async (_current, idx) => {
			const workerdb = `${testdbsName}_${idx + 1}`;
			try {
				await connection.query(`DROP DATABASE IF EXISTS ${workerdb};`);
				await connection.query(`CREATE DATABASE ${workerdb};`);
				const workerDbConnection = new DataSource({...connectionConfig, database: workerdb} as DataSourceOptions)
				await workerDbConnection.initialize();
				console.log('before migrations')
				console.log(workerDbConnection)
				await workerDbConnection.runMigrations();
				console.log('after migrations')
				await workerDbConnection.destroy();
			} catch (err) {
				console.log(err);
				throw err;
			}
		})
	);
	await connection.close();
};
