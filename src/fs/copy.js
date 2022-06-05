import * as fsp from "fs/promises";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const copy = async () => {
  try {
    const root = await fsp.readdir(__dirname);
    if (root.includes("files_copy")) throw new Error("FS operation failed");
    const src = path.join(__dirname, "files");
    const dest = path.join(__dirname, "files_copy");
    copyFiles(src, dest);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

async function copyFiles(src, dest) {
  const list = await fsp.readdir(src, { withFileTypes: true });
  await fsp.mkdir(dest);
  list.forEach(async (item) => {
    if (item.isDirectory()) {
      copyFiles(path.join(src, item.name), path.join(dest, item.name));
    } else {
      await fsp.copyFile(path.join(src, item.name), path.join(dest, item.name));
    }
  });
}

copy();
