#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { program } = require("commander");
const { encrypt, decrypt } = require("../index");
const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = require(packageJsonPath);

program
  .version(`Go-crypt v${packageJson.version}`)
  .description("Go-crypt is simple encryption and decryption using PBKDF2, zlib, and AES-256-GCM.");

program
  .command("enc")
  .description("Encryption file or data stdin")
  .option("-f, --file <file>", "Specify input path file for encrypt")
  .option("-p, --passkey <passkey>", "Specify passphrase key")
  .option("-c, --stdout", "Written output data to terminal")
  .action((options) => {
    const { file, passkey, stdout } = options;

    // Check if both passkey are provided
    if (!passkey) {
      console.error("Both -p or --passkey option are required.");
      process.exit(1);
    }

    // Check if file option is specified
    if (file) {
      // If file is specified, read file content
      const plaintext = fs.readFileSync(file, "utf-8");

      // Encrypt text
      const encrypted = encrypt(plaintext, passkey);

      if (stdout) {
        // Print encrypted result to stdout
        process.stdout.write(encrypted);
      } else {
        // Save encrypted result to file
        const outputFile = file + ".enc";
        fs.unlinkSync(file);
        fs.writeFileSync(outputFile, encrypted);
        console.log(`Encryption completed. Result saved to ${outputFile}`);
      }
    } else {
      // If file is not specified, read input from stdin
      let inputText = "";
      process.stdin.setEncoding("utf-8");
      process.stdin.on("readable", () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
          inputText += chunk;
        }
      });

      process.stdin.on("end", () => {
        // Encrypt text
        const encrypted = encrypt(inputText, passkey);

        // Print encrypted result to stdout
        process.stdout.write(encrypted);
      });
    }
  });

program
  .command("dec")
  .description("Decryption file or data stdin")
  .option("-f, --file <file>", "Specify path file for decrypt")
  .option("-p, --passkey <passkey>", "Specify passphrase key")
  .option("-c, --stdout", "Written output data to terminal")
  .action((options) => {
    const { file, passkey, stdout } = options;

    // Check if both passkey are provided
    if (!passkey) {
      console.error("Both -p or --passkey option are required.");
      process.exit(1);
    }

    // Check if file option is specified
    if (file) {
      // If file is specified, read file content
      const encryptedData = fs.readFileSync(file);

      // Decrypt text
      const decrypted = decrypt(encryptedData, passkey);

      if (stdout) {
        // Print decrypted result to stdout
        process.stdout.write(decrypted);
      } else {
        // Save decrypted result to file
        const outputFile = file.replace(".enc", "");
        fs.unlinkSync(file);
        fs.writeFileSync(outputFile, decrypted);
        console.log(`Decryption completed. Result saved to ${outputFile}`);
      }
    } else {
      // If file is not specified, read input from stdin
      let inputText = Buffer.alloc(0);
      process.stdin.on("readable", () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
          inputText = Buffer.concat([inputText, chunk]);
        }
      });

      process.stdin.on("end", () => {
        // Decrypt text
        const decrypted = decrypt(inputText, passkey);

        // Print decrypted result to stdout
        process.stdout.write(decrypted);
      });
    }
  });

program.parse(process.argv);
