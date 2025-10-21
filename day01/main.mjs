import { readFile, writeFile, appendFile } from "node:fs/promises";

// if not using encoding, then return buffer
const buffer = await readFile("./data.json");
console.log(buffer, "\n");

// if using encoding, then return string
const data = await readFile("./data.json", "utf-8");
console.log(data);

// await writeFile("./data.json", "nodejs", "utf-8");
// console.log(data);

await appendFile("./data.json", "\nhello nodejs", "utf-8");

console.log(data);
