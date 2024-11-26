import { promises as fs } from "fs";
import path from "path";

export const readComponentSource = async (
  directory: string,
  componentName: string
) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "components",
    directory,
    `${componentName}.tsx`
  );
  console.log("====================================");
  console.log("file path ", filePath);
  console.log("====================================");
  try {
    const source = await fs.readFile(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
};
