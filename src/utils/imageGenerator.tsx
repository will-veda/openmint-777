"use server";

import path from "path";
import fs from "fs";

async function getGeneratedImages(): Promise<{ [fileName: string]: any }> {
  const dirPath = path.join(process.cwd(), "src/collections");
  let jsonData = readJSONFiles(dirPath);
  return jsonData;
}

// Function to read all JSON files in a directory
async function readJSONFiles(
  dirPath: string
): Promise<{ [fileName: string]: any }> {
  const jsonData: string[] = [];
  const contentJson: any = [];
  try {
    const files = await fs.promises.readdir(
      path.join(process.cwd(), "src/collections")
    );
    console.log(process.cwd(), "src/collections");

    await Promise.all(
      files.map(async (file) => {
        if (path.extname(file).toLowerCase() === ".json") {
          const filePath = path.join(dirPath, file);
          const content = await fs.promises.readFile(filePath, "utf-8");
          // const contentJson = JSON.parse(content);
          contentJson.push(JSON.parse(content));
          const imageData = Buffer.from(
            contentJson.data["image.webp"]["$b"],
            "hex"
          );
          const base64Image = imageData.toString("base64");
          jsonData.push(base64Image);
        }
      })
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.log(`Directory ${dirPath} not found.`);
    } else {
      console.error("Error reading JSON files:", error);
    }
  }
  return contentJson;
}

// Function to generate images from the JSON data
function generateImages(jsonData: { [fileName: string]: any }) {
  Object.entries(jsonData).forEach(([fileName, data]) => {
    const imageData = Buffer.from(data.data["image.webp"]["$b"], "hex");
    const imagePath = path.join(path.dirname(fileName), "image.webp");
    fs.writeFileSync(imagePath, imageData);
    console.log(`Image generated: ${imagePath}`);
  });
}

export { getGeneratedImages, readJSONFiles, generateImages };
