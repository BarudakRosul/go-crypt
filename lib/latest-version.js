const https = require("https");

/**
 * Fetches the new version from the provided package.json URL.
 *
 * @param {string} url - The URL of the package.json file.
 * @returns {Promise<string>} - A promise that resolves to the version string.
 */
async function latestVersion(url) {
  try {
    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        let data = "";

        // A chunk of data has been received.
        response.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received.
        response.on("end", () => {
          try {
            const packageJson = JSON.parse(data);
            const version = packageJson.version;

            resolve(version);
          } catch (error) {
            reject(new Error("Error parsing JSON"));
          }
        });
      }).on("error", (error) => {
        reject(new Error(error.message));
      });
    });
  } catch (error) {
    throw error;
  }
}

module.exports = latestVersion;
