import os from 'os';

export function getJestWorkers(): number {
	const cpus = os.cpus().length;
	const MAX_AVAILABLE_THREADS = String(Math.max(cpus - 1, 1));
	return parseInt(
		process.env.MAX_WORKERS ||
			process.env.JEST_WORKERS ||
			MAX_AVAILABLE_THREADS,
		10
	);
}
