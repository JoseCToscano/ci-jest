import {AppDataSource} from "./data-source";

const port = process.env.PORT || 5000;

import { App } from './App';


export const startServer = (): void => {

    AppDataSource.initialize()
        .then((conn) =>  conn.query('SELECT 1 + 1 AS solution')
        )
        .then(() => {
            console.log('[App] Database Ready');
        }).catch((e)=>{
            console.error(e);
    })
    const app = App.getInstance();
    app.listen(port, () => {
        return console.log(`Server listening on port ${port}`);
    });
};
