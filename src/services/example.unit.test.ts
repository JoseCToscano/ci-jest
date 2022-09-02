import {ExampleService} from "./example";
import {Connection, createConnection} from "typeorm";
import {DataSource} from "../config/dataSourceConfig";

describe('Example unit tests', () => {
    let service: ExampleService;
	let connection: Connection;

	beforeAll(async () => {
		service = new ExampleService();
		connection = await createConnection(DataSource.getConfig());
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	afterAll(async()=>{
		await connection.close();
	})

	test('Sample test', async ()=>{
		const clgSpy = jest.spyOn(console, 'log').mockImplementation();
		await service.delayedConsoleLog('mesg', 1);
		expect(clgSpy).toHaveBeenCalledWith('mesg');
	});

	test('Sample test with connection', async ()=>{
		const [result] = await connection.query('SELECT 1 + 1 AS solution')
		expect(result).toBeDefined();
	});
});