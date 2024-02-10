const { execSync } = require("child_process");
const parseBoolean = require("./parse-boolean");

/**
 * Check internet availability with a timeout.
 *
 * @return {boolean} - Promise that resolves to true if if internet is available, false otherwise.
 */
function internetAvailable() {
  const command = `
    if ping -q -c 1 -W 1 google.com >/dev/null 2>&1; then
      printf true
    else
      printf false
    fi
  `;
  const connection = execSync(command, { encoding: "utf-8" });
  return parseBoolean(connection);
}

module.exports = internetAvailable;
