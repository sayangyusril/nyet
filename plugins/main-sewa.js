const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERA*L, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let sewa = `*「 LIST SEWA BOT 」*

10 Hari - 05,000
30 Hari - 20,000

Pulsa 
Axis [083832492541] + 2k
Indosat [085856508824] + 2k

Non Pulsa
Dana [083832492541]`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: sewa,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/menu.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria',
               url: 'https://saweria.co/botrhns',
             }

           },
               {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler
