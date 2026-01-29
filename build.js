const fs = require("fs");

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.copyFileSync("index.html", "dist/index.html");

console.log("Build completed successfully using Node.js");
