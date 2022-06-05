import path from "path";
import fs from "fs/promises";
import { release, version } from "os";
import { createServer } from "http";
import "./files/c.js";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(
    await fs.readFile(path.join(__dirname, "files", "a.json"))
  );
} else {
  unknownObject = JSON.parse(
    await fs.readFile(path.join(__dirname, "files", "b.json"))
  );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServer((_, res) => {
  res.end("Request accepted");
});
