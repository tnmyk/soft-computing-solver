import { readdirSync } from "fs";
import { join } from "path";
const getAlgos = () => {
  const algos = readdirSync(join(process.cwd(), "algorithms")).map((file) => {
    return file.replace(/\.ts$/, "");
  });
  return algos;
};
export default getAlgos;
