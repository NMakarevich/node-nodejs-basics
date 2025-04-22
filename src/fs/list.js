import { readdir } from "node:fs/promises";
import * as path from "node:path";

const ERROR_MESSAGE = 'FS operation failed';

const list = async () => {
    try {
        const files = await readdir(path.join(process.cwd(), 'files'));
        console.log(files);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(ERROR_MESSAGE);
        }
    }
};

await list();