import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";
import { stdout } from "process";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const rs = fs.createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );

  rs.pipe(hash).setEncoding("hex").pipe(stdout);
};

calculateHash();
