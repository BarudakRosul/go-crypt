declare module "gcrypt" {
  /**
   * Encrypts text using PBKDF2, zlib compression, and AES-256-GCM encryption.
   *
   * @param {Buffer|string} text - The text to be encrypted.
   * @param {string} [password] - The passphrase for encryption.
   * @returns {Buffer} - Encrypted data.
   */
  function encrypt(text: Buffer | string, password?: string): Buffer;

  /**
   * Decrypts encrypted data using PBKDF2, zlib decompression, and AES-256-GCM decryption.
   *
   * @param {Buffer|string} text - The encrypted data text.
   * @param {string} [password] - The passphrase for decryption.
   * @returns {Buffer|string} - Decrypted text.
   */
  function decrypt(text: Buffer | string, password?: string): Buffer | string;

  export { encrypt, decrypt };
}

export = gcrypt;
