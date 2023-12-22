<div align="center">
  <img src="https://raw.githubusercontent.com/BarudakRosul/go-crypt/master/image/logo.svg" alt="Go-crypt Logo" width="260"/>
  <h1>Go-crypt</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://npmjs.org/gcrypt"><img src="https://img.shields.io/npm/v/gcrypt" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/go-crypt" alt="License"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/go-crypt" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/go-crypt" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/go-crypt/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/go-crypt" alt="Issues"/></a>
  </p>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Go-crypt adalah alat kriptografi sederhana yang bertujuan menyediakan solusi enkripsi dan dekripsi yang aman menggunakan algoritma PBKDF2, zlib, dan AES-256-GCM. Alat ini dirancang untuk melindungi kerahasiaan teks sensitif dengan mengenkripsi dan mendekripsi data.

## Fitur

Go-crypt menawarkan fitur-fitur berikut:

- **Enkripsi Aman**: Memanfaatkan algoritma PBKDF2, zlib, dan AES-256-GCM untuk enkripsi yang kuat dan aman.
- **Dekripsi yang Aman**: Proses dekripsi yang aman dan dapat diandalkan untuk mengembalikan data ke dalam bentuk semula.
- **Antarmuka Pengguna Sederhana**: Antarmuka pengguna yang mudah digunakan untuk memfasilitasi proses enkripsi dan dekripsi.

## Instalasi

Untuk menginstal Go-crypt secara lokal, ikuti langkah-langkah instalasi ini:

- Librari Node.js:

   ```shell
   npm install gcrypt
   ```

- Perintah CLI:

   ```shell
   npm -g install gcrypt
   ```

## Penggunaan

Untuk memulai menggunakan Go-crypt, ikuti langkah-langkah ini:

- Librari Node.js
  ```javascript
  const { encrypt, decrypt } = require("gcrypt");

  const text = "Secret text message!";
  cobst pass = "SecretPasswordKey";

  // Encrypted text
  const encrypted = encrypt(text, pass);

  console.log(encrypted.toString("utf-8");

  // Decrypted text
  const decrypted = decrypt(encrypted, pass);

  console.log(decrypted);
  ```
- Perintah CLI
  - Untuk enkripsi:
    ```shell
    gcrypt enc -f inputfile.txt -p SecretPassKey
    ```
    atau
    ```shell
    echo "Text secret message!" | gcrypt enc -p SecretPassKey
    ```
  - Untuk dekripsi:
    ```shell
    gcrypt dec -f inputfile.txt.enc -p SecretPassKey
    ```
    atau
    ```shell
    echo "Text encrypted!" | gcrypt dec -p SecretPassKey
    ```

## Berkontribusi

Kontribusi pada Go-crypt sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Go-crypt dilisensikan di bawah Lisensi AGPL-3.0 - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Go-crypt menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Go-crypt dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/go-crypt/releases).

Terima kasih telah memilih Go-crypt! Kami bertujuan untuk memberikan solusi yang aman dan andal untuk mengenkripsi dan mendekripsi teks di berbagai lingkungan.