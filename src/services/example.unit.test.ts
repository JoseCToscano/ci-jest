import {ExampleService} from "./example";

describe('Example unit tests', () => {
    let service: ExampleService;

	beforeAll(() => {
		service = new ExampleService();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	afterAll(()=>{
		console.log('After all')
	})

	test('Sample test', async ()=>{
		const clgSpy = jest.spyOn(console, 'log').mockImplementation();
		await service.delayedConsoleLog('mesg', 2000);
		expect(clgSpy).toHaveBeenCalledWith('mesg');
	})
});