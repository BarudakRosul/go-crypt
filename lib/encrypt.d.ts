/**
 * Module declaration for encrypting text.
 *
 * @module encrypt
 */
declare module "encrypt" {
  /**
   * Interface representing the encryption function.
   */
  interface Encrypt {
    (text: Buffer | string, password?: string): Buffer;
  }

  const encrypt: Encrypt;

  export { encrypt, Encrypt };
  export default encrypt;
}
