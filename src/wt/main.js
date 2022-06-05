import { Worker } from "worker_threads";
import path from "path";
import { cpus } from "os";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const performCalculations = async () => {
  const threadsNumber = cpus().length;
  const promises = [];
  for (let i = 0; i < threadsNumber; i += 1) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, "worker.js"), {
          workerData: 10 + i,
        });
        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
      })
    );
  }
  Promise.all(promises).then((results) => console.log(results));
};

performCalculations();
