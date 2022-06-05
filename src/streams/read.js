import fs from "fs";
import { Readable } from "stream";
import { stdout } from "process";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

class MyReadable extends Readable {
  constructor(opt) {
    super(opt);
  }

  _read(size) {
    const rs = fs.createReadStream(
      path.join(__dirname, "files", "fileToRead.txt")
    );
    rs.on("data", (chunk) => stdout.write(chunk));
  }
}

export const read = async () => {
  const readable = new MyReadable();
  readable.read();
};

read();
