export class ExampleService{
    async delayedConsoleLog(msg: string, timeout: number){
        await new Promise(res=>{
            setTimeout(res, timeout);
        });
        console.log(msg);
    }
}