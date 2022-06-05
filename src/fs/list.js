import * as fsp from "fs/promises";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const list = async () => {
  try {
    const list = await fsp.readdir(__dirname);
    if (!list.includes("files")) throw new Error("FS operation failed");
    const files = await fsp.readdir(path.join(__dirname, "files"));
    files.forEach((file) => console.log(file));
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

list();
