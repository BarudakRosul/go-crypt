const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Decrypts encrypted data using PBKDF2, zlib decompression, and AES-256-GCM decryption.
 *
 * @param {Buffer|string} text -  The encrypted data text.
 * @param {string} password - The passphrase for decryption.
 * @returns {Buffer|string} - Decrypted text.
 */
function decrypt(text, password = "12345678") {
  // Convert buffer string to Buffer
  if (! Buffer.isBuffer(text)) {
    const buffString = text;
    const hexValues = buffString.replace(/<Buffer|>/g, "").split(" ").filter(Boolean);
    const bufferArray = hexValues.map(hex => parseInt(hex, 16));
    var text = Buffer.from(bufferArray);
  }

  const salt = text.slice(10, 26);
  const tag = text.slice(26, 42);
  const encryptedText = text.slice(42);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha512");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.alloc(16));
  decipher.setAuthTag(tag);
  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

  // Decompress text using zlib
  const base64Text = zlib.inflateSync(decrypted).toString("utf-8");

  // Convert base64 text to hexadecimal format
  const hexText = Buffer.from(base64Text, "base64").toString("hex");

  // Convert hexadecimal text to utf-8 format
  const decrypt = Buffer.from(hexText, "hex").toString("utf-8");

  return decrypt;
}

module.exports = decrypt;
