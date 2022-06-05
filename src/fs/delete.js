import * as fsp from "fs/promises";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const remove = async () => {
  try {
    const files = await fsp.readdir(path.join(__dirname, "files"));
    if (!files.includes("fileToRemove.txt")) {
      throw new Error("FS operation failed");
    }
    await fsp.rm(path.join(__dirname, "files", "fileToRemove.txt"));
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

remove();
