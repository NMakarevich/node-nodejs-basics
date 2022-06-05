import process from "process";

export const parseArgs = () => {
  const args = process.argv.slice(2);
  const props = [];
  const values = [];
  for (let item of args) {
    if (item.startsWith("--")) props.push(item.slice(2));
    else values.push(item);
  }
  const output = [];
  for (let i = 0; i < props.length; i += 1) {
    output.push(`${props[i]} is ${values[i]}`);
  }
  console.log(output.join(", "));
};

parseArgs();
