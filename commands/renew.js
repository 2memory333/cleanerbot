const Discord = require('discord.js')

module.exports = {
    name: "renew",
    description: "test command",

    async run (client, message, komut) {
        message.channel.clone({position: message.channel.position})
        .catch(console.error);
     
        message.channel.delete('cleaning messages')
        .catch(console.error);
    }
}