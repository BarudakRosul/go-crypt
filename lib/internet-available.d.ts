/**
 * Module declaration for check internet available.
 *
 * @module internet-available
 */
declare module "internet-available" {
  /**
   * Interface representing the checking internet availability function.
   */
  interface InternetAvailable {
    (): boolean;
  }

  const internetAvailable: InternetAvailable;

  export { internetAvailable, InternetAvailable };
  export default internetAvailable;
}
