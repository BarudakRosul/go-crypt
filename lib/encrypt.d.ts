declare module "encrypt" {
  /**
   * Encrypts text using PBKDF2, zlib compression, and AES-256-GCM encryption.
   *
   * @param {Buffer|string} text - The text to be encrypted.
   * @param {string} [password] - The passphrase for encryption.
   * @returns {Buffer} - Encrypted data.
   */
  function encrypt(text: Buffer | string, password?: string): Buffer;

  export = encrypt;
}
