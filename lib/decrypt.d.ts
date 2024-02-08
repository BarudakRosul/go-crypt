/**
 * Module declaration for decrypting text.
 *
 * @module decrypt
 */
declare module "decrypt" {
  /**
   * Interface representing the decryption function.
   */
  interface Decrypt {
    (text: Buffer | string, password?: string): Buffer | string;
  }

  const decrypt: Decrypt;

  export { decrypt, Decrypt };
  export default decrypt;
}
