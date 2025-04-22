import { writeFile } from 'node:fs/promises';
import * as path from 'node:path';

const TEXT = 'I am fresh and young';
const FILENAME = 'fresh.txt';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
    try {
        const promise = writeFile(
            path.join(process.cwd(), 'files', FILENAME),
            TEXT,
            { flag: 'wx' }
        )
        await promise;
    } catch(error) {
        if (error.code === 'EEXIST') {
            console.log(ERROR_MESSAGE)
        }
    }
};

await create();