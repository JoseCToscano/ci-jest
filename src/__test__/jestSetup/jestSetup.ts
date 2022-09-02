import {ConnectionOptions, createConnection} from 'typeorm';
import * as fs from 'fs';
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

const config = new Config();

module.exports = async () => {
	await validateDistFolder();

	const {database, ...connectionConfig} = config.getDataSourceConfig();
	const connection = await createConnection({
		type: connectionConfig.type,
		username: connectionConfig.username,
		password: connectionConfig.password,
		host: connectionConfig.host,
		port: connectionConfig.port,
		name: 'baseConnection'
	});
	// const connection = await createConnection(connectionConfig as ConnectionOptions);


	const workersTotal = 1; // getJestWorkers();

	const workers = Array(workersTotal).fill(1);

	await Promise.all(
		workers.map(async (_current, idx) => {
			const workerdb = `${database}_${idx + 1}`;
			try {
				await connection.query(`DROP DATABASE IF EXISTS ${workerdb};`);
				await connection.query(`CREATE DATABASE ${workerdb};`);

				const workerDbConnection = await createConnection({
					...connectionConfig,
					database: workerdb
				}  as ConnectionOptions);

				await workerDbConnection.runMigrations();
				await workerDbConnection.close();
			} catch (err) {
				console.log(err);
				throw err;
			}
		})
	);

	await connection.close();
};
