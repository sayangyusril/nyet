let fs = require('fs')

global.owner = ['6283832492541'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  kotz: 'https://api.justkotz.tech',
  caliph: 'https://caliphapi.com',
  xteam: 'https://api.xteam.xyz',
  amel: 'https://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'https://hardianto.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.justkotz.tech': 'apikeylu',
  'https://caliphapi.com': 'apikeylu',
  'https://api.xteam.xyz': 'apikeylu',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'apikeylu',
  'https://api.zeks.xyz': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://leyscoders-api.herokuapp.com': 'apikeylu'
}

// Sticker WM
global.packname = 'Made by'
global.author = 'MarsBOT-MD'

global.benar = 'benar mendapatkan'
global.salah = 'salah'
global.dikit = 'hampir benar'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = 'Made by : RHns'
global.instagram = 'https://instagram.com/bgsrhnsh'
global.media = 'https://telegra.ph/file/1a0e237dc563e7cc1a143.jpg'
global.wait = '*tunggu sedang diproses...*'
global.eror = '*bermasalah...*'
global.dtl = 'Sorce Code'
global.link = 'https://wa.me/message/3VBSFONVCZQ5P1'
global.dtc = 'Owner'
global.call = '+62 813-2017-0984'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
