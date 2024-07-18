declare module "decrypt" {
  /**
   * Decrypts encrypted data using PBKDF2, zlib decompression, and AES-256-GCM decryption.
   *
   * @param {Buffer|string} text - The encrypted data text.
   * @param {string} [password] - The passphrase for decryption.
   * @returns {Buffer|string} - Decrypted text.
   */
  function decrypt(text: Buffer | string, password?: string): Buffer | string;

  export = decrypt;
}
