let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('xteam', '/randomimage/darkjoke', {}, 'APIKEY')
    await conn.sendButtonImg(m.chat, url, '*NIH BANH*', wm, 'Next', '.darkjoke',m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = false

module.exports = handler
