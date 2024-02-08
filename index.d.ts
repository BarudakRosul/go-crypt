const { encrypt, Encrypt } = require("./lib/encrypt");
const { decrypt, Decrypt } = require("./lib/decrypt");

/**
 * Module declaration for the "@barudakrosul/gcrypt" module.
 *
 * @module @barudakrosul/gcrypt
 */
declare module "@barudakrosul/gcrypt" {
  /**
   * Interface representing the gcrypt module.
   */
  interface Gcrypt {
    encrypt: Encrypt;
    decrypt: Decrypt;
    gcrypt: Gcrypt;
  }

  const gcrypt: Gcrypt;

  export { gcrypt, encrypt, decrypt, Gcrypt, Encrypt, Decrypt };
  export default gcrypt;
}
