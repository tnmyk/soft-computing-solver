import { readdirSync } from "fs";
import { join } from "path";
const getAlgos = () => {
  const algos = readdirSync(join(process.cwd(), "pages", "solve")).map(
    (file) => {
      return file.replace(/\.tsx$/, "");
    }
  );
  return algos;
};
export default getAlgos;
