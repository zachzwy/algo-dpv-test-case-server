import fs from "fs";

const dirName = "./algo-dpv-tests/";

export const getProblems = () => {
  const availableProblems: {
    [key: string]: object;
  } = {};

  const fileNames = fs.readdirSync(dirName);

  fileNames.forEach((fileName) => {
    if (fileName.includes("json")) {
      const key = fileName.split(".")[0];
      const content = fs.readFileSync(dirName + fileName, "utf-8");
      const {
        problems: { title },
        tests,
      } = JSON.parse(content);
      const args = Object.keys(tests[0].args);
      availableProblems[key] = {
        title,
        placeholder: {
          python: `def solution(${args.join(", ")}):`,
        },
      };
    }
  });

  return availableProblems;
};
