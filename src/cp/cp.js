import { fork } from "child_process";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const args = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const child = fork(path.join(__dirname, "files", "script.js"), args, {
    stdio: [process.stdin, process.stdout, process.stderr, "ipc"],
  });
};

spawnChildProcess(args);
