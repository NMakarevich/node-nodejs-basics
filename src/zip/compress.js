import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream  } from "node:fs";
import { pipeline } from "node:stream/promises";
import * as path from "node:path";

const SOURCE_FILE = 'fileToCompress.txt';
const DESTINATION_FILE = 'archive.gz'

const compress = async () => {
    try {
        const rs = createReadStream(path.join(import.meta.dirname, 'files', SOURCE_FILE));
        const ws = createWriteStream(path.join(import.meta.dirname, 'files', DESTINATION_FILE));
        const gzip = createGzip();
        await pipeline(rs, gzip, ws);
    } catch (error) {
        console.log(error.message);
    }
};

await compress();