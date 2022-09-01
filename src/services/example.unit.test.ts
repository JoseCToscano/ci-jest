import {ExampleService} from "./example";
import {Pool} from "promise-mysql";
import {openConnection} from "../config/db";

describe('Example unit tests', () => {
    let service: ExampleService;
	let connection: Pool;

	beforeAll(async () => {
		service = new ExampleService();
		connection = await openConnection();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	afterAll(async()=>{
		await connection.end();
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