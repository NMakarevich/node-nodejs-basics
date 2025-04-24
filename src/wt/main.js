import { cpus } from "node:os";
import { Worker, isMainThread } from 'node:worker_threads'
import * as path from "node:path";

const performCalculations = async () => {
    const cpuCoresNumber = cpus().length;
    if (isMainThread) {
        const promises = []
        for (let i = 0; i < cpuCoresNumber; i += 1) {
            promises.push(new Promise((resolve) => {
                const worker = new Worker(path.join(import.meta.dirname, 'worker.js'))
                worker.postMessage(10 + i);
                worker.on('message', (data) => {
                    resolve({ status: 'resolved', data })
                });
                worker.on("error", () => {
                    resolve({ status: 'error', data: null })
                });
            }))

        }
        const results = await Promise.all(promises);
        console.log(results)
    }
};

await performCalculations();