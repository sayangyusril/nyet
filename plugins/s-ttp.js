const { sticker5 } = require('../lib/sticker')
const fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  if (/^ttp1?$/i.test(command)) {
    let stiker = await sticker5(null, API('xteam', '/ttp', { file: '', text: teks }), packname, author)
    if (stiker) return await conn.sendFile(m.chat, stiker, '', '', m)
    throw stiker.toString()
  }
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp[1-4]?$/i

module.exports = handler
