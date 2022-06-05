import * as fsp from "fs/promises";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const content = "I am fresh and young";

export const create = async () => {
  try {
    const files = await fsp.readdir(path.join(__dirname, "files"));
    if (files.includes("fresh.txt")) throw new Error("FS operation failed");
    fsp.writeFile(path.join(__dirname, "files", "fresh.txt"), content);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

create();
