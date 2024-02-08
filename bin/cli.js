#!/bin/node
const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const gcrypt = require("../index");
const printf = require("../lib/printf");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = require(packageJsonPath);

const __program = String(process.argv.slice(1,2)).replace(/.+\//g, "");

try {
  program
    .version(`Go-crypt v${packageJson.version}`)
    .description("Go-crypt is simple encryption and decryption using PBKDF2, zlib, and AES-256-GCM.")
    .option("-f, --file <file_name>", "input file name for encryption or decryption")
    .option("-o, --output <out_name>", "save result to out name")
    .option("-d, --decrypt", "starting decryption")
    .option("-p, --passkey <pass>", "enter passphrase key (default: '12345678')")
    .option("-c, --stdout", "write output to terminal")
    .action((options) => {
      let { file, output, decrypt, passkey, stdout } = options;

      if (! passkey) {
        passkey = "12345678";
      }

      if (decrypt) {
        if (file) {
          const data = fs.readFileSync(file);
          const decrypted = gcrypt.decrypt(data, passkey);

          if (stdout) {
            process.stdout.write(decrypted);
            process.exit(0);
          } else {
            if (! output) {
              output = file.replace(".enc", "");
            }
            fs.unlinkSync(file);
            fs.writeFileSync(output, decrypted);
            printf(`${__program}: decryption successfully`);
            printf(`File saved as '${output}'`);
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
              printf(`${__program}: missing operand`);
              printf(`Try '${__program} --help' for more information`);
              process.exit(1);
            }

            if (String(inputText).search("<Buffer")) {
              const buffer = Buffer.alloc(0);
              inputText = Buffer.concat([buffer, inputText]);
            }

            const decrypted = gcrypt.decrypt(inputText, passkey);

            if (! output) {
              process.stdout.write(decrypted);
              process.exit(0);
            } else {
              fs.writeFileSync(output, decrypted);
              printf(`${__program}: decryption successfully`);
              printf(`File saved as '${output}'`);
              process.exit(0);
            }
          });
        }
      } else {
        if (file) {
          const data = fs.readFileSync(file, "utf-8");
          const encrypted = gcrypt.encrypt(data, passkey);

          if (stdout) {
            process.stdout.write(encrypted);
            process.exit(0);
          } else {
            if (! output) {
              output = file + ".enc";
            }
            fs.unlinkSync(file);
            fs.writeFileSync(output, encrypted);
            printf(`${__program}: encryption successfully`);
            printf(`File saved as '${output}'`);
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
              printf(`${__program}: missing operand`);
              printf(`Try '${__program} --help' for more information`);
              process.exit(1);
            }

            const encrypted = gcrypt.encrypt(inputText, passkey);

            if (! output) {
              process.stdout.write(encrypted);
              process.exit(0);
            } else {
              fs.writeFileSync(output, encrypted);
              printf(`${__program}: encryption successfully`);
              printf(`File saved as '${output}'`);
              process.exit(0);
            }
          });
        }
      }
    })
    .on("--help", () => {
      console.log(`\nThis tool licensed under ${packageJson.license} License, see <${packageJson.homepage.replace("#readme", "/tree/master/LICENSE")}>`)
      console.log(`Report any bugs to <${packageJson.bugs.url}>`);
      console.log(`Full documentation <${packageJson.homepage}>`);
    })
    .parse(process.argv);
} catch (error) {
  printf(`${__program}: ${error.message}`);
  const errorCode = typeof error.code === "number" ? error.code : 1;
  process.exit(errorCode);
}
