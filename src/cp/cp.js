import { fork } from 'node:child_process';
import * as path from "node:path";

const CHILD = 'script.js'

const spawnChildProcess = async (args) => {
    const childProcess = fork(path.join(import.meta.dirname, 'files', CHILD), args);
    childProcess.on("data", (data) => {
        childProcess.send(data)
    })
    childProcess.on("message", (data) => {
        console.log(data)
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
