import { parentPort, isMainThread } from 'node:worker_threads'

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (!isMainThread) {

        parentPort.once("message", (data) => {
            parentPort.postMessage(nthFibonacci(data))
        });
    }
};

sendResult();