import { createReadStream } from "node:fs";
import * as path from "node:path";

const FILE_NAME = 'fileToRead.txt';

const read = async () => {
    const rs = createReadStream(path.join(import.meta.dirname, 'files', FILE_NAME));

    let content = '';

    rs.on('data', chunk => content += chunk)
        .on('end', () => console.log(content));
};

await read();