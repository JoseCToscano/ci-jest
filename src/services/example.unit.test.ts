import {ExampleService} from "./example";
import {Connection, createConnection} from "typeorm";

describe('Example unit tests', () => {
    let service: ExampleService;
	let connection: Connection;

	beforeAll(async () => {
		service = new ExampleService();
		connection = await createConnection();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	afterAll(async()=>{
		await connection.close();
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