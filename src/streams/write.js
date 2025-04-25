import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';
import * as path from "node:path";

const FILE_NAME = 'fileToWrite.txt';

const write = async () => {
    const ws = createWriteStream(path.join(import.meta.dirname, 'files', FILE_NAME));

    stdin.on('data', (data) => {
        ws.write(data);
    })
};

await write();