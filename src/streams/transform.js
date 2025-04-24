import { stdin, stdout } from "node:process";
import { pipeline } from 'node:stream/promises'

import { Transform, Readable, Writable } from 'node:stream';

class ReadableStream extends Readable {
    _read(size) {
        stdin.on('data', (chunk) => this.push(chunk))
    }
}

class WritableStream extends Writable {
    _write(chunk, encoding, callback) {
        stdout.write(`${chunk}\n`);
        callback();
    }
}

class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const result = chunk.toString().split('').reverse().join('');
        this.push(result);
        callback();
    }
}

const transform = async () => {
    const reverseTransform = new ReverseTransform()
    const readable = new ReadableStream();
    const writable = new WritableStream();

    await pipeline(readable, reverseTransform, writable)
};

await transform();