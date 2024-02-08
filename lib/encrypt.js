const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Encrypts text using PBKDF2, zlib compression, and AES-256-GCM encryption.
 *
 * @param {Buffer|string} text - The text to be encrypted.
 * @param {string} password - The passphrase for encryption.
 * @returns {Buffer} - Encrypted data.
 */
function encrypt(text, password = "12345678") {
  // Convert text to hexadecimal format
  const hexText = Buffer.from(text, "utf-8").toString("hex");

  // Convert hexadecimal text to base64 format
  const base64Text = Buffer.from(hexText, "hex").toString("base64");

  // Compress text using zlib
  const compressedText = zlib.deflateSync(base64Text);

  const salt = crypto.randomBytes(16);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha512");
  const cipher = crypto.createCipheriv("aes-256-gcm", key, Buffer.alloc(16));
  const encrypted = Buffer.concat([cipher.update(compressedText), cipher.final()]);
  const tag = cipher.getAuthTag();
  const encrypt = Buffer.concat([Buffer.from("\x00gcrypt__\x1c"), salt, tag, encrypted]);

  return encrypt;
}

module.exports = encrypt;
