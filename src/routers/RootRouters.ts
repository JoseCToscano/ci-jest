import express, { Request, Response, Router } from 'express';


export class RootRouter {
	private static instance: RootRouter;

	private router: Router;

	private constructor() {
		this.router = express.Router();
		this.router.get('/', this.getRoot);
		this.router.get('/health', this.healthCheck);
	}

	static getRouter(): Router {
		if (!RootRouter.instance) {
			RootRouter.instance = new RootRouter();
		}
		return RootRouter.instance.router;
	}

	private getRoot = (_req: Request, res: Response) => res.status(200).send('Hello world!');

	private healthCheck = (_req: Request, res: Response) =>
		res.status(200).send('Server is online!');

}
