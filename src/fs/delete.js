import { rm } from 'node:fs/promises';
import * as path from "node:path";

const FILE_TO_DELETE = 'fileToRemove.txt';
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
    try {
        const promise = rm(path.join(process.cwd(), 'files', FILE_TO_DELETE))
        await promise;
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(ERROR_MESSAGE)
        }
    }
};

await remove();