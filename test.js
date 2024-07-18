const fs = require("fs");
const assert = require("assert");
const { encrypt, decrypt } = require("./index");

describe("Encryption and Decryption", function () {
  const passphrase = "testPassphrase";
  const testData = "Hello, this is a test message.";

  it("should encrypt and decrypt text correctly", function () {
    const encrypted = encrypt(testData, passphrase);
    const decrypted = decrypt(encrypted, passphrase);

    assert.strictEqual(decrypted, testData);
  });

  it("should encrypt and decrypt file correctly", function () {
    const testFileName = "testfile.txt";
    const encryptedFileName = testFileName + ".enc";

    // Write test data to file
    fs.writeFileSync(testFileName, testData, "utf-8");

    // Encrypt file
    const encrypted = encrypt(fs.readFileSync(testFileName), passphrase);
    fs.writeFileSync(encryptedFileName, encrypted);

    // Decrypt file
    const decrypted = decrypt(fs.readFileSync(encryptedFileName), passphrase);
    fs.writeFileSync(testFileName, decrypted);

    // Read decrypted data from file
    const decryptedData = fs.readFileSync(testFileName, "utf-8");

    assert.strictEqual(decryptedData, testData);

    // Cleanup created files
    fs.unlinkSync(testFileName);
    fs.unlinkSync(encryptedFileName);
  });
});
