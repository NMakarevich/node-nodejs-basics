import {createGunzip} from 'node:zlib';
import { createReadStream, createWriteStream  } from "node:fs";
import { pipeline } from "node:stream/promises";
import * as path from "node:path";

const SOURCE_FILE = 'archive.gz';
const DESTINATION_FILE = 'fileToCompress.txt'

const decompress = async () => {
    try {
        const rs = createReadStream(path.join(import.meta.dirname, 'files', SOURCE_FILE))
        const ws = createWriteStream(path.join(import.meta.dirname, 'files', DESTINATION_FILE))
        const gunzip = createGunzip()
        await pipeline(rs, gunzip, ws)
    } catch (error) {
        console.log(error.message);
    }
};

await decompress();