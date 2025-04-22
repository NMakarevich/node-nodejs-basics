import { cp } from 'node:fs/promises'
import * as path from "node:path";

const SOURCE_FOLDER_NAME = 'files';
const DESTINATION_FOLDER_NAME = 'copy_files';
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
    try {
        const promise = cp(
            path.join(process.cwd(), SOURCE_FOLDER_NAME),
            path.join(process.cwd(), DESTINATION_FOLDER_NAME),
            { recursive: true, errorOnExist: true, force: false }
        );
        await promise;
    }
    catch (error) {
        if (error.code === 'ERR_FS_CP_EEXIST' || error.code === 'ENOENT') {
            console.log(ERROR_MESSAGE)
        }
    }
};

await copy();
