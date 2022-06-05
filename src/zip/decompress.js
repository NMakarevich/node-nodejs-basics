import zlib from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const decompress = async () => {
  const src = createReadStream(path.join(__dirname, "files", "archive.gz"));
  const dest = createWriteStream(
    path.join(__dirname, "files", "fileToCompress1.txt")
  );
  const unzip = zlib.createGunzip();
  pipeline(src, unzip, dest, (err) => {
    if (err) console.log(err);
  });
};

decompress();
