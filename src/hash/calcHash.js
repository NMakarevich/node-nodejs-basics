import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import * as path from "node:path";

const FILE_NAME = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const read = createReadStream(path.join(import.meta.dirname, 'files', FILE_NAME));
    const hash = createHash('sha256');
    read.on('data', (chunk) => {
        hash.update(chunk);
    }).on('end', () => console.log(hash.digest('hex')))
};

await calculateHash();