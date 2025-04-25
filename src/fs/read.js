import { readFile } from 'node:fs/promises';
import * as path from 'node:path';

const FILE_NAME = 'fileToRead.txt'
const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
    try {
        const content = await readFile(
            path.join(process.cwd(), 'files', FILE_NAME),
            {encoding: 'utf8'}
        )
        console.log(content)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(ERROR_MESSAGE)
        }
    }
};

await read();