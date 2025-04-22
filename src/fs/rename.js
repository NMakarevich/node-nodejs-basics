import { rename as renameFile, readdir } from 'node:fs/promises'
import * as path from 'node:path'

const ERROR_MESSAGE = 'FS operation failed';
const SOURCE = 'wrongFilename.txt';
const DESTINATION = 'properFilename.md'

const rename = async () => {
    try {
        const files = (await readdir(path.join(process.cwd(), 'files')))

        if (!files.includes(SOURCE) || files.includes(DESTINATION)) {
            throw new Error(ERROR_MESSAGE);
        }

        const promise = renameFile(
            path.join(process.cwd(), 'files', SOURCE),
            path.join(process.cwd(), 'files', DESTINATION)
        );
        await promise;
    } catch (error) {
        console.log(error.message)
    }
};

await rename();