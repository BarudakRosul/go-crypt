<div align="center">
  <h1>Go-crypt</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Report Bug</a> · <a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Request Feature</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/go-crypt/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/go-crypt/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/gcrypt"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fgcrypt" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/go-crypt" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/gcrypt"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fgcrypt" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/go-crypt?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/go-crypt?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/go-crypt" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [CLI Usage](#cli-usage)
6. [Contribution](#contribution)
7. [License](#license)
8. [Acknowledge](#acknowledge)
9. [Donate](#donate)
10. [Changelog](#changelog)

## Introduction

Go-crypt is a simple cryptography tool that aims to provide secure encryption and decryption solutions using PBKDF2, zlib, and AES-256-GCM algorithms. It is designed to protect the confidentiality of sensitive text by encrypting and decrypting data.

## Features

Go-crypt offers the following features:

- Utilizes PBKDF2, zlib, and AES-256-GCM algorithms for strong and secure encryption.
- Secure and reliable decryption process to restore data to its original form.
- Can be integrated into TypeScript code.
- Provides CLI options to encrypt or decrypt from the terminal.

## Installation

To install Go-crypt locally, follow these installation steps:

```shell
npm install @barudakrosul/gcrypt
```

To install globally, use:

```shell
npm install -g @barudakrosul/gcrypt
```

## Usage

To start using Go-crypt, import the module first:

**1\. CommonJS**
```javascript
const gcrypt = require("@barudakrosul/gcrypt");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import gcrypt from "@barudakrosul/gcrypt";
```

**3\. TypeScript**
```typescript
import gcrypt from "@barudakrosul/gcrypt";
```

Example of usage:

```javascript
const text = "Secret text message!";
const pass = "SecretPasswordKey";

const encrypted = gcrypt.encrypt(text, pass);
const decrypted = gcrypt.decrypt(encrypted, pass);

console.log("Encrypted:", encrypted.toString("utf-8"));
console.log("Decrypted:", decrypted);
```

## CLI Usage

To use this tool from the command line, you can use the `gcrypt` command with the following options:

<table>
  <tr>
    <td><p align="center"><b>Option</b></p></td>
    <td><p align="center"><b>Description</b></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-h</code> or <code>--help</code></p></td>
    <td><p align="left">Display help for this command.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-V</code> or <code>--version</code></p></td>
    <td><p align="left">Display the current version.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-f</code> or <code>--file</code></p></td>
    <td><p align="left">Enter the file name to encrypt or decrypt.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-o</code> or <code>--output</code></p></td>
    <td><p align="left">Save the encryption or decryption result with another desired name.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-v</code> or <code>--verbose</code></p></td>
    <td><p align="left">Enable verbose mode (text captions).</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-d</code> or <code>--decrypt</code></p></td>
    <td><p align="left">Start decrypting file or standard input data.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-p</code> or <code>--passkey</code></p></td>
    <td><p align="left">Enter a strong password for encryption or a specific password for decryption (default: <code>12345678</code>).</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-c</code> or <code>--stdout</code></p></td>
    <td><p align="left">Display the result of file encryption or decryption to the terminal.</p></td>
  </tr>
</table>

If no filename is given, `gcrypt` will encrypt or decrypt from standard input to standard output. You can combine short options, such as `-v -c` which is the same as `-vc` or `-cv`.

Example of CLI usage:

```shell
$ gcrypt --file script.js
```

Example if using the `--passkey` option:

```shell
$ gcrypt --file script.js --passkey secretskey
```

Example of encryption of standard input:

```shell
$ printf "Secret text message!" | gcrypt
```

## Contribution

Contributions to Go-crypt are greatly appreciated! Whether reporting bugs, suggesting new features, or contributing to code improvements.

## License

Go-crypt is licensed under the AGPL-3.0 License - see the [LICENSE](/LICENSE) file for details.

## Acknowledge

Go-crypt appreciates the support and contributions of the following individuals and open source projects:

- [@FajarKim](https://github.com/FajarKim) - Lead developer and creator of the application.
- Open source community - For valuable contributions to the tools and libraries used in this project.

## Donate

We really appreciate your support to continue developing this project. If you find this project useful, you can support us with a donation:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Every donation, no matter the amount, means a lot to us. Thank you for your support! ❤️

## Changelog

Keep up with the latest changes and updates of Go-crypt by referring to [Catatan Perubahan](https://github.com/BarudakRosul/go-crypt/releases).

Thank you for choosing Go-crypt! We aim to provide a secure and reliable solution for encrypting and decrypting text in a variety of environments.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)
