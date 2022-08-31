import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import {RootRouter} from "./routers/RootRouters";

export class App {
    private static instance: Express;

    private static corsOpt: CorsOptions = {
        origin: ['*'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    };

    static getInstance(): Express {
        if (!App.instance) {
            App.instance = express();
            App.instance.use(cors(App.corsOpt));
            App.instance.use('/', RootRouter.getRouter());
        }
        return App.instance;
    }
}
