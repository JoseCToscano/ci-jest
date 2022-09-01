import {ExampleService} from "../../services/example";

describe('Example Integration tests', () => {
    let service: ExampleService;

    beforeAll(() => {
        service = new ExampleService();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Sample test', async ()=>{
        const clgSpy = jest.spyOn(console, 'log').mockImplementation();
        await service.delayedConsoleLog('mesg', 1000);
        expect(clgSpy).toHaveBeenCalledWith('mesg');
    })
});