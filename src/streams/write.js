import fs from "fs";
import { Writable } from "stream";
import { stdin } from "process";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

class MyWritable extends Writable {
  ws = fs.createWriteStream(path.join(__dirname, "files", "fileToWrite.txt"));

  _write(chunk, encoding, callback) {
    this.ws.write(chunk);
    callback();
  }
}

export const write = async () => {
  const writable = new MyWritable();
  stdin.pipe(writable);
};

write();
