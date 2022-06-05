import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const compress = async () => {
  const src = createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const dest = createWriteStream(path.join(__dirname, "files", "archive.gz"));
  const gzip = zlib.createGzip();

  pipeline(src, gzip, dest, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

compress();
