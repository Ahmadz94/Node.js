//אחמד זוביידאת -313536633
//לרה חורי211565445
//50-2
// Load Node.js File System module
const fs = require("fs");

// Define the input file paths
const inputFiles = [
  "./input/text1.txt",
  "./input/text2.txt",
  "./input/text3.txt",
];

// Function to read a file and return its lines
function readLines(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data.split(/\r?\n/);
}

// Read all input files into arrays
const allLines = inputFiles.map(readLines); // [ [lines1], [lines2], [lines3] ]

// Find the largest number of lines among the three files
const maxLines = Math.max(...allLines.map((arr) => arr.length));

// Create an array to hold all merged lines
const combined = [];

// Merge lines: one from each file in order
for (let i = 0; i < maxLines; i++) {
  for (let j = 0; j < allLines.length; j++) {
    if (allLines[j][i]) {
      combined.push({
        source: `file${j + 1}`,
        line: allLines[j][i],
      });
    }
  }
}

// Write the combined lines to output.txt
fs.writeFileSync(
  "output.txt",
  combined.map((item) => item.line).join("\n"),
  "utf8"
);

// Print confirmation and show results as a table
console.log("✅ output.txt created successfully!\n");
console.table(combined);

