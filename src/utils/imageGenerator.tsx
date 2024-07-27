"use server";

import path from "path";
import fs from "fs";

async function getGeneratedImages(pageNumber: number, pageCount: number): Promise<{ [fileName: string]: any }> {
  const dirPath = path.join(process.cwd(), "src/collections");
  return readJSONFiles(dirPath, pageNumber, pageCount);
}

// Function to read all JSON files in a directory
async function readJSONFiles(
  dirPath: string,
  pageNumber: number,
  pageCount: number
): Promise<{ totalCount: number; nftList: { [fileName: string]: any } }> {
  const jsonData: string[] = [];
  let jsonFiles: string[] = [];

  try {
    const files = await fs.promises.readdir(
      path.join(process.cwd(), "src/collections")
    );

    jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');
    const pageFiles = jsonFiles.slice((pageNumber - 1) * pageCount, pageNumber * pageCount);
    await Promise.all(
      pageFiles.map(async (file) => {
        if (path.extname(file).toLowerCase() === ".json") {
          const filePath = path.join(dirPath, file);
          const content = await fs.promises.readFile(filePath, "utf-8");
          // jsonData.push(content);
          jsonData.push(JSON.parse(content));
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

  return { totalCount: jsonFiles.length, nftList: jsonData };
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
