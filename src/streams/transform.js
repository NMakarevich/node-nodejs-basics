import { Writable, Readable, Transform } from "stream";
import { stdin, stdout } from "process";

class MyReadable extends Readable {
  constructor(opt) {
    super(opt);
  }

  _read() {
    stdin.on("data", (chunk) => this.push(chunk));
  }
}

class MyWritable extends Writable {
  _write(chunk, encoding, callback) {
    stdout.write(chunk);
  }
}

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const transformChunk = chunk
      .toString("utf-8")
      .trim()
      .split("")
      .reverse()
      .join("");
    this.push(transformChunk);

    callback();
  }
}

export const transform = async () => {
  const readable = new MyReadable();
  const writable = new MyWritable();
  const transform = new MyTransform();
  readable.pipe(transform).pipe(writable);
};

transform();
