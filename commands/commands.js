const Discord = require('discord.js')

module.exports = {
    name: "commands",
    description: "test command",

    async run (client, message, komut) {
        message.channel.send({embed: {
            color: 0,
            author: {
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "CLEAN",
                value: "``!clean`` <amount> | (max 1000)"
              },
              {
                name: "RENEW",
                value: "``!renew`` | renews the channel."
              },
              {
                name: "WIPE",
                value: "``!wipe`` | deletes all messages in channel. parameters -5",
              },
              {
                name: "\u200B",
                value: "\u200B",
              },
              {
                name: "PREFIX",
                value: "``!prefix`` (botPrefix) | sets a new prefix for your bot.",
              },
              {
                name: "CHANGELOG",
                value: "``!changelog`` | shows version of the bot."
              },
              {
                name: "\u200B",
                value: "\u200B",
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.imgur.com/2Ju83Y5.jpg",
              text: 'Cleaner All rights reserved.'
            }
          }
        });
    }
}