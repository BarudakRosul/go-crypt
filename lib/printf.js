const { execSync } = require("child_process");

function printf(text) {
  if (text === null || text === undefined || text === "" || text === "\n") {
    throw Error("Input your text for print");
  }

  try {
    execSync(`printf >&2 '%s\\n' "${text}"`, { encoding: "utf-8" });
  } catch(error) {
    throw Error(error.message);
  }
}

module.exports = printf;
