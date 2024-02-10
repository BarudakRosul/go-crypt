/**
 * Module declaration for get latest version provided package.json URL.
 *
 * @module internet-available
 */
declare module "latest-version" {
  /**
   * Interface representing the getting latest version function.
   */
  interface LatestVersion {
    (url: string): Promise<string>;
  }

  const latestVersion: LatestVersion;

  export { latestVersion, LatestVersion };
  export default latestVersion:;
}
