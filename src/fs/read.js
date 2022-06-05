import * as fsp from "fs/promises";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const read = async () => {
  try {
    const files = await fsp.readdir(path.join(__dirname, "files"));
    if (!files.includes("fileToRead.txt")) {
      throw new Error("FS operation failed");
    }
    const data = await fsp.readFile(
      path.join(__dirname, "files", "fileToRead.txt"),
      {
        encoding: "utf-8",
      }
    );
    console.log(data);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

read();
