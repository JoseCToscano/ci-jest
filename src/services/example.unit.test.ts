import {ExampleService} from "./example";
import {AppDataSource} from "../data-source";
import { DataSource} from "typeorm";

describe('Example unit tests', () => {
    let service: ExampleService;
	let connection: DataSource;

	beforeAll(async () => {
		service = new ExampleService();
		connection = await AppDataSource.initialize();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	afterAll(async()=>{
		await connection.destroy();
	})

	test('Sample test', async ()=>{
		const clgSpy = jest.spyOn(console, 'log').mockImplementation();
		await service.delayedConsoleLog('mesg', 2000);
		expect(clgSpy).toHaveBeenCalledWith('mesg');
	});

	test('Sample test with connection', async ()=>{
		const [result] = await connection.query('SELECT 1 + 1 AS solution')
		expect(result).toBeDefined();
	});
});