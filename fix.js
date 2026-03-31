const fs = require("fs"); const content = fs.readFileSync("src/components/ProjectsSection.tsx", "utf8"); fs.writeFileSync("src/components/ProjectsSection.tsx", content.replace(/""/g, "\""), "utf8");
