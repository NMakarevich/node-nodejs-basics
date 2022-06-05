import * as fsp from "fs/promises";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const rename = async () => {
  try {
    const list = await fsp.readdir(path.join(__dirname, "files"));
    if (
      !list.includes("wrongFilename.txt") ||
      list.includes("properFilename.md")
    )
      throw new Error("FS operation failed");
    await fsp.rename(
      path.join(__dirname, "files", "wrongFilename.txt"),
      path.join(__dirname, "files", "properFilename.md")
    );
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

rename();
