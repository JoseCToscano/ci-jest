const port = process.env.PORT || 5000;

import { App } from './App';

export const startServer = (): void => {
    const app = App.getInstance();
    app.listen(port, () => {
        return console.log(`Server listening on port ${port}`);
    });
};
