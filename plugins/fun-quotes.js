let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('amel', '/quotes', {}, 'apikey'))

    let json = res.data
    conn.sendButton(m.chat, json.author, json.quotes, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i

module.exports = handler
