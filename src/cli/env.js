import process from "process";

export const parseEnv = () => {
  const env = Object.entries(process.env);
  console.log(
    env
      .filter((arr) => arr[0].startsWith("RSS_"))
      .map((arr) => arr.join("="))
      .join("; ")
  );
};

parseEnv();
