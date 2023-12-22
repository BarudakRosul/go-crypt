const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Decrypts encrypted data using PBKDF2, zlib decompression, and AES-256-GCM decryption.
 *
 * @param {Buffer} encryptedData The encrypted data.
 * @param {string} password The passphrase for decryption.
 * @returns {string} Decrypted text.
 */
function decrypt(encryptedData, password) {
  const salt = encryptedData.slice(0, 16);
  const tag = encryptedData.slice(16, 32);
  const text = encryptedData.slice(32);

  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha512");

  const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.alloc(16));
  decipher.setAuthTag(tag);

  const decrypted = Buffer.concat([decipher.update(text), decipher.final()]);

  // Decompress text using zlib
  const decompressedBase64 = zlib.inflateSync(decrypted).toString("utf-8");

  // Convert base64 text to hexadecimal format
  const hexText = Buffer.from(decompressedBase64, "base64").toString("hex");

  // Convert hexadecimal text to utf-8 format
  const utf8Text = Buffer.from(hexText, "hex").toString("utf-8");

  return utf8Text;
}

module.exports = decrypt;
