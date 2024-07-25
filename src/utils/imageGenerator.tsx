import fs from "fs";
import path from "path";

// Function to read all JSON files in a directory
function readJSONFiles(dirPath: string): { [fileName: string]: any } {
  const jsonData: { [fileName: string]: any } = {};
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (path.extname(file).toLowerCase() === '.json') {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      jsonData[file] = JSON.parse(content);
    }
  });

  return jsonData;
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

// Example usage

export { readJSONFiles, generateImages };
