<div align="center">
  <img src="https://raw.githubusercontent.com/BarudakRosul/go-crypt/master/image/logo.svg" alt="Go-crypt Logo" width="260"/>
  <h1>Go-crypt</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://www.npmjs.com/package/@barudakrosul/gcrypt"><img src="https://img.shields.io/npm/v/@barudakrosul/gcrypt" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/go-crypt" alt="License"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/go-crypt" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/go-crypt" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/go-crypt" alt="Issues"/></a>
  </p>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [License](#license)
7. [Acknowledge](#acknowledge)
8. [Changelog](#changelog)

## Introduction

Go-crypt is a simple cryptography tool designed to provide secure encryption and decryption solutions using the PBKDF2, zlib, and AES-256-GCM algorithms. This tool is created to safeguard the confidentiality of sensitive text by encrypting and decrypting data.

## Features

Go-crypt offers the following features:

- **Secure Encryption**: Utilizes PBKDF2, zlib, and AES-256-GCM algorithms for robust and secure encryption.
- **Secure Decryption**: Provides a secure and reliable decryption process to restore data to its original form.
- **Simple User Interface**: User-friendly interface to facilitate the encryption and decryption processes.

## Installation

To install Go-crypt locally, follow these installation steps:

- Node.js Library:

   ```shell
   npm install @barudakrosul/gcrypt
   ```

- CLI Command:

   ```shell
   npm -g install @barudakrosul/gcrypt
   ```

## Usage

To start using Go-crypt, follow these steps:

- Node.js Library
  ```javascript
  const { encrypt, decrypt } = require("@barudakrosul/gcrypt");

  const text = "Secret text message!";
  const pass = "SecretPasswordKey";

  // Encrypted text
  const encrypted = encrypt(text, pass);

  console.log(encrypted.toString("utf-8"));

  // Decrypted text
  const decrypted = decrypt(encrypted, pass);

  console.log(decrypted);
  ```
- CLI Command
  - For encryption:
    ```shell
    gcrypt enc -f inputfile.txt -p SecretPassKey
    ```
    or
    ```shell
    echo "Text secret message!" | gcrypt enc -p SecretPassKey
    ```
  - For decryption:
    ```shell
    gcrypt dec -f inputfile.txt.enc -p SecretPassKey
    ```
    or
    ```shell
    echo "Text encrypted!" | gcrypt dec -p SecretPassKey
    ```

Supported commands or options:

<table>
  <tr>
    <td><p align="center"><b>Commands or Options</b></p></td>
    <td><p align="center"><b>Description</b></p></td>
  </tr>
  <tr>
    <td><code>-h</code>, <code>--help</code>, or <code>help</code></td>
    <td>Display help for this tool.</td>
  </tr>
  <tr>
    <td><code>-V</code> or <code>--version</code></td>
    <td>Display the version of this tool.</td>
  </tr>
  <tr>
    <td><code>-f</code> or <code>--file</code></td>
    <td>Use a file to start encrypting or decrypting.</td>
  </tr>
  <tr>
    <td><code>-p</code> or <code>--passkey</code></td>
    <td>Enter a strong password for encryption or a specific password for decryption.</td>
  </tr>
  <tr>
    <td><code>-c</code> atau <code>--stdout</code></td>
    <td>Display the result of file encryption or decryption to terminal.</td>
  </tr>
  <tr>
    <td><code>enc</code></td>
    <td>Option to start encrypting.</td>
  </tr>
  <tr>
    <td><code>dec</code></td>
    <td>Option to start decrypting.</td>
  </tr>
</table>

## Contribution

Contributions to Go-crypt are highly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Go-crypt is licensed under the AGPL-3.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Go-crypt appreciates the support and contributions from individuals and open-source projects, including:

- [@FajarKim](https://github.com/FajarKim) - The main developer and creator of the application.
- Open-source community - For valuable contributions to the tools and libraries used in this project.

## Changelog

Stay updated on the latest changes and updates to Go-crypt by referring to the [Changelog](https://github.com/BarudakRosul/go-crypt/releases).

Thank you for choosing Go-crypt! We aim to provide a secure and reliable solution for encrypting and decrypting text in various environments.
