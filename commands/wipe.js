const Discord = require('discord.js')

module.exports = {
    name: "wipe",
    description: "wipe",

    async run (client, message, komut) {
        async function wipe() {
            var msg_size = 100;
            while (msg_size == 100) {
                await message.channel.bulkDelete(100)
            .then(messages => msg_size = messages.size)
            .catch(console.error);
            }
            message.channel.send("Channel has been wiped!")
        }
        wipe()
    }
}