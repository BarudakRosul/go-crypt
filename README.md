<div align="center">
  <h1>Go-crypt</h1>
  <p><a href="/docs/README.en.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/go-crypt/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
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

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Penggunaan CLI](#penggunaan-cli)
6. [Berkontribusi](#berkontribusi)
7. [Lisensi](#lisensi)
8. [Penghargaan](#penghargaan)
9. [Donasi](#donasi)
10. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Go-crypt adalah alat kriptografi sederhana yang bertujuan menyediakan solusi enkripsi dan dekripsi yang aman menggunakan algoritma PBKDF2, zlib, dan AES-256-GCM. Alat ini dirancang untuk melindungi kerahasiaan teks sensitif dengan mengenkripsi dan mendekripsi data.

## Fitur

Go-crypt menawarkan fitur-fitur berikut:

- Memanfaatkan algoritma PBKDF2, zlib, dan AES-256-GCM untuk enkripsi yang kuat dan aman.
- Proses dekripsi yang aman dan dapat diandalkan untuk mengembalikan data ke dalam bentuk semula.
- Dapat diintegrasikan ke dalam kode TypeScript.
- Menyediakan opsi CLI untuk mengenkripsi atau mendekripsi dari terminal.

## Instalasi

Untuk menginstal Go-crypt secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/gcrypt
```

Untuk menginstal secara global, gunakan:

```shell
npm install -g @barudakrosul/gcrypt
```

## Penggunaan

Untuk memulai menggunakan Go-crypt, import modulnya terlebih dahulu:

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

Contoh penggunaan:

```javascript
const text = "Secret text message!";
const pass = "SecretPasswordKey";

const encrypted = gcrypt.encrypt(text, pass);
const decrypted = gcrypt.decrypt(encrypted, pass);

console.log("Encrypted:", encrypted.toString("utf-8"));
console.log("Decrypted:", decrypted);
```

## Penggunaan CLI

Untuk menggunakan alat ini dari baris perintah, Anda dapat menggunakan perintah `gcrypt` dengan opsi berikut:

<table>
  <tr>
    <td><p align="center"><b>Opsi</b></p></td>
    <td><p align="center"><b>Keterangan</b></p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-h</code> atau <code>--help</code></p></td>
    <td><p align="left">Menampilkan bantuan untuk perintah ini.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-V</code> atau <code>--version</code></p></td>
    <td><p align="left">Menampilkan versi saat ini.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-f</code> atau <code>--file</code></p></td>
    <td><p align="left">Masukkan nama file untuk mengenkripsi atau mendekripsi.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-o</code> atau <code>--output</code></p></td>
    <td><p align="left">Menyimpan hasil enkripsi atau dekripsi dengan nama lain yang diinginkan.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-v</code> atau <code>--verbose</code></p></td>
    <td><p align="left">Mengaktifkan mode verbose (keterangan teks).</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-d</code> atau <code>--decrypt</code></p></td>
    <td><p align="left">Mulai mendekripsi file atau data input standar.</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-p</code> atau <code>--passkey</code></p></td>
    <td><p align="left">Masukkan password yang kuat untuk enkripsi atau password yang spesifik untuk dekripsi (default: <code>12345678</code>).</p></td>
  </tr>
  <tr>
    <td><p align="left"><code>-c</code> atau <code>--stdout</code></p></td>
    <td><p align="left">Menampilkan hasil enkripsi atau dekripsi file ke terminal.</p></td>
  </tr>
</table>

Jika tidak ada nama file yang diberikan, `gcrypt` akan mengenkripsi atau mendekripsi dari input standar ke output standar. Anda dapat menggabungkan opsi pendek, seperti `-v -c` yang sama artinya dengan `-vc` atau `-cv`.

Contoh penggunaan CLI:

```shell
$ gcrypt --file script.js
```

Contoh jika menggunakan opsi `--passkey`:

```shell
$ gcrypt --file script.js --passkey secretskey
```

Contoh enkripsi dari input standar:

```shell
$ printf "Secret text message!" | gcrypt
```

## Berkontribusi

Kontribusi pada Go-crypt sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Go-crypt dilisensikan di bawah Lisensi AGPL-3.0 - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Go-crypt menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@FajarKim](https://github.com/FajarKim) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Go-crypt dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/go-crypt/releases).

Terima kasih telah memilih Go-crypt! Kami bertujuan untuk memberikan solusi yang aman dan andal untuk mengenkripsi dan mendekripsi teks di berbagai lingkungan.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)
