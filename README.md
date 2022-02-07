<p align="center">
<img src="https://telegra.ph/file/abb6866ea91527250501d.jpg" alt="MARS BOT" width="500"/>


</p>
<p align="center">
<a href="#"><img title="SHIRAORI BOT MULTI DEVICE" src="https://img.shields.io/badge/MARS BOT MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/RHns20/MarsBOT-MD"><img title="Author" src="https://img.shields.io/badge/Author-RHns-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/RHns20/MarsBOT-MD/followers"><img title="Followers" src="https://img.shields.io/github/followers/RHns20?label=Followers&color=white&style=flat-square"></a>
<a href="https://github.com/RHns20/MarsBOT-MD/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/RHns20/MarsBOT-MD?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/RHns20/MarsBOT-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/RHns20/MarsBOT-MD?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/RHns20/MarsBOT-MD/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/RHns20/MarsBOT-MD?label=Watchers&color=green&style=flat-square"></a>
</p>

---

# Mars BOT Whatsapp MD
## For Users Termux Install Module [here](https://github.com/ilmanhdyt/node_modules)
## Information
> MarsBOT whatsapp using a Baileys library.
> Jika kamu menemukan semacam bug, harap untuk dimaklumi sementara
>
> • NOTE: Pastikan Jaringan kalian lancar dan device kalian bagus:v, 
> 
> • Kalo pake termux mungkin bakal lama respon nya, saya sarankan pake heroku

<h3 align="center">Made by :</h3>
<p align="center">
  <a href="https://github.com/ilmanhdyt"><img src="https://github.com/ilmanhdyt.png?size=128" height="128" width="128" /></a>
  <a href="https://github.com/BochilGaming"><img src="https://github.com/BochilGaming.png?size=128" height="128" width="128" /></a>
  <a href="https://github.com/RHns20"><img src="https://github.com/RHns20.png?size=128" height="128" width="128" /></a>
</p>

## Tester Bot
* Jika kamu menemukan bug jangan lupa buka Issues
* Info Lebih Lanjut, Chat [owner-Mars](https://wa.me/6283832492541)
* Kamu bisa testing fitur MarsBOT [disini](https://wa.me/628819028385?text=.menu)

## How To Change Menu Display
----
### Gif Menu Display
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/shiraori.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://ilman:<password>@cluster0.iiede.mongodb.net/ShiraoriBOT?retryWrites=true&w=majority'`


## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/RHns20/MarsBOT-MD
cd MarsBOT-MD
npm install
npm update
npm index
```

---------

## UNTUK PENGGUNA TERMUX
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/RHns20/MarsBOT-MD
cd MarsBOT-MD
yarn
node .
```

## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Installing the FFmpeg for Windows
* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:
```cmd
> ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Ilman](https://github.com/ilmanhdyt.png?size=150)](https://github.com/ilmanhdyt) | [![Istikmal](https://github.com/BochilGaming.png?size=150)](https://github.com/BochilGaming) | [![RHns](https://github.com/RHns20.png?size=150)](https://github.com/RHns20)
----|----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Ilman](https://github.com/ilmanhdyt) | [Istikmal](https://github.com/BochilGaming) | [RHns](https://github.com/RHns20)
 Author | yg nambah fitur | yg punya sc | Nambah Fitur

## Donate
- [Saweria](https://saweria.co/botrhns)
