#!/bin/node
const fs = require("fs");
const path = require("path");
const https = require("https");
const checknet = require("@barudakrosul/internet-available");
const millify = require("millify");
const semver = require("semver");
const { program } = require("commander");
const gcrypt = require("../index");
const getPackageVersion = require("../lib/get-version");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = require(packageJsonPath);

const __program = String(process.argv.slice(1, 2)).replace(/.+\//g, "").replace(/(\.[^.]+)?$/, "");
const url = "https://raw.githubusercontent.com/BarudakRosul/go-crypt/master/package.json";

try {
  (async () => {
    if (await checknet.checkWithAxios()) {
      const version = await getPackageVersion(url);

      if (semver.gt(version, packageJson.version)) {
        console.log(`${__program}: found new version 'v${version}'`);
        console.log(`Try 'npm install -g ${packageJson.name}@v${version}' to start updating.`);
      }
    }
  })();

  program
    .name(__program)
    .version(`Go-crypt v${packageJson.version}`)
    .description("Go-crypt is simple encryption and decryption using PBKDF2, zlib, and AES-256-GCM.")
    .option("-f, --file <file_name>", "input file name for encryption or decryption")
    .option("-o, --output <out_name>", "save result to out name")
    .option("-v, --verbose", "verbose mode")
    .option("-d, --decrypt", "starting decryption")
    .option("-p, --passkey <pass>", "enter passphrase key (default: '12345678')")
    .option("-c, --stdout", "write output to terminal")
    .action((options) => {
      let { file, output, verbose, decrypt, passkey, stdout } = options;

      if (!passkey) {
        passkey = "12345678";
      }

      try {
        if (decrypt) {
          if (file) {
            const firstTimeout = new Date();
            const data = fs.readFileSync(file);
            const decrypted = gcrypt.decrypt(data, passkey);
            const lastTimeout = new Date();
            const originalBytes = Buffer.from(data, "utf-8").length;
            const outputBytes = Buffer.from(decrypted, "utf-8").length;
            const timeout = millify.millify((lastTimeout - firstTimeout) / 1000, { precision: 2 });
            let percentDecrypted = ((originalBytes - outputBytes) / (originalBytes + outputBytes)) * 100;

            if (percentDecrypted < 0) {
              percentDecrypted += 100;
            }

            if (verbose) {
              process.stderr.write("Buffer size    : 8192\n");
              process.stderr.write(`Original bytes : ${originalBytes} bytes\n`);
              process.stderr.write(`Output bytes   : ${outputBytes} bytes\n`);
              process.stderr.write(`Timeout        : ${timeout} sec\n`);
              process.stderr.write(`Decrypted      : ${millify.millify(percentDecrypted, { precision: 2})}%\n`);
            }

            if (stdout) {
              process.stdout.write(decrypted);
              process.exit(0);
            } else {
              if (!output) {
                output = file.replace(".enc", "");
              }
              fs.unlinkSync(file);
              fs.writeFileSync(output, decrypted);
              console.log(`${__program}: decryption successfully`);
              console.log(`File saved as '${output}'`);
              process.exit(0);
            }
          } else {
            let inputText = "";
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText = chunk;
              }
            });

            process.stdin.on("end", () => {
              if (inputText === null || inputText === "") {
                process.stderr.write(`${__program}: missing operand\n`);
                process.stderr.write(`Try '${__program} --help' for more information\n`);
                process.exit(1);
              }

              if (String(inputText).search("<Buffer")) {
                const buffer = Buffer.alloc(0);
                inputText = Buffer.concat([buffer, inputText]);
              }

              const firstTimeout = new Date();
              const decrypted = gcrypt.decrypt(inputText, passkey);
              const lastTimeout = new Date();
              const originalBytes = Buffer.from(inputText, "utf-8").length;
              const outputBytes = Buffer.from(decrypted, "utf-8").length;
              const timeout = millify.millify((lastTimeout - firstTimeout) / 1000, { precision: 2 });
              let percentDecrypted = ((originalBytes - outputBytes) / (originalBytes + outputBytes)) * 100;

              if (percentDecrypted < 0) {
                percentDecrypted += 100;
              }

              if (verbose) {
                process.stderr.write("Buffer size    : 8192\n");
                process.stderr.write(`Original bytes : ${originalBytes} bytes\n`);
                process.stderr.write(`Output bytes   : ${outputBytes} bytes\n`);
                process.stderr.write(`Timeout        : ${timeout} sec\n`);
                process.stderr.write(`Decrypted      : ${millify.millify(percentDecrypted, { precision: 2})}%\n`);
              }

              if (!output) {
                process.stdout.write(decrypted);
                process.exit(0);
              } else {
                fs.writeFileSync(output, decrypted);
                console.log(`${__program}: decryption successfully`);
                console.log(`File saved as '${output}'`);
                process.exit(0);
              }
            });
          }
        } else {
          if (file) {
            const firstTimeout = new Date();
            const data = fs.readFileSync(file, "utf-8");
            const encrypted = gcrypt.encrypt(data, passkey);
            const lastTimeout = new Date();
            const originalBytes = Buffer.from(data, "utf-8").length;
            const outputBytes = Buffer.from(encrypted, "utf-8").length;
            const timeout = millify.millify((lastTimeout - firstTimeout) / 1000, { precision: 2 });
            let percentEncrypted = ((originalBytes - outputBytes) / (originalBytes + outputBytes)) * 100;

            if (percentEncrypted < 0) {
              percentEncrypted += 100;
            }

            if (verbose) {
              process.stderr.write("Buffer size    : 8192\n");
              process.stderr.write(`Original bytes : ${originalBytes} bytes\n`);
              process.stderr.write(`Output bytes   : ${outputBytes} bytes\n`);
              process.stderr.write(`Timeout        : ${timeout} sec\n`);
              process.stderr.write(`Encrypted      : ${millify.millify(percentEncrypted, { precision: 2})}%\n`);
            }

            if (stdout) {
              process.stdout.write(encrypted);
              process.exit(0);
            } else {
              if (!output) {
                output = file + ".enc";
              }
              fs.unlinkSync(file);
              fs.writeFileSync(output, encrypted);
              console.log(`${__program}: encryption successfully`);
              console.log(`File saved as '${output}'`);
              process.exit(0);
            }
          } else {
            let inputText = "";
            process.stdin.on("readable", () => {
              const chunk = process.stdin.read();
              if (chunk !== null) {
                inputText = chunk;
              }
            });

            process.stdin.on("end", () => {
              if (inputText === null || inputText === "") {
                process.stderr.write(`${__program}: missing operand\n`);
                process.stderr.write(`Try '${__program} --help' for more information\n`);
                process.exit(1);
              }

              const firstTimeout = new Date();
              const encrypted = gcrypt.encrypt(inputText, passkey);
              const lastTimeout = new Date();
              const originalBytes = Buffer.from(inputText, "utf-8").length;
              const outputBytes = Buffer.from(encrypted, "utf-8").length;
              const timeout = millify.millify((lastTimeout - firstTimeout) / 1000, { precision: 2 });
              let percentEncrypted = ((originalBytes - outputBytes) / (originalBytes + outputBytes)) * 100;

              if (percentEncrypted < 0) {
                percentEncrypted += 100;
              }

              if (verbose) {
                process.stderr.write("Buffer size    : 8192\n");
                process.stderr.write(`Original bytes : ${originalBytes} bytes\n`);
                process.stderr.write(`Output bytes   : ${outputBytes} bytes\n`);
                process.stderr.write(`Timeout        : ${timeout} sec\n`);
                process.stderr.write(`Encrypted      : ${millify.millify(percentEncrypted, { precision: 2})}%\n`);
              }

              if (!output) {
                process.stdout.write(encrypted);
                process.exit(0);
              } else {
                fs.writeFileSync(output, encrypted);
                console.log(`${__program}: encryption successfully`);
                console.log(`File saved as '${output}'`);
                process.exit(0);
              }
            });
          }
        }
      } catch(error) {
        process.stderr.write(`${__program}: ${error.message}\n`);
        const errorCode = typeof error.code === "number" ? error.code : 1;
        process.exit(errorCode);
      }
    })
    .on("--help", () => {
      console.log(`\nIf no filename is given, '${__program}' will encrypt or decrypt from`);
      console.log("standard input to standard output. You can combine short options,");
      console.log("such as '-v -c' which is the same as '-vc' or '-cv'.\n");
      console.log(`This tool licensed under ${packageJson.license} License, see <${packageJson.homepage.replace("#readme", "/tree/master/LICENSE")}>`)
      console.log(`Report any bugs to <${packageJson.bugs.url}>`);
      console.log(`Full documentation <${packageJson.homepage}>`);
    })
    .parse(process.argv);
} catch (error) {
  process.stderr.write(`${__program}: ${error.message}\n`);
  const errorCode = typeof error.code === "number" ? error.code : 1;
  process.exit(errorCode);
}
