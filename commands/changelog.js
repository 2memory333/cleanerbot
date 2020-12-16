const Discord = require('discord.js')

module.exports = {
    name: "changelog",
    description: "test command",

    async run (client, message, komut) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('0')
        .setTitle('Changelog CLEANER-BOT')
        .setURL('https://discord.gg/3mfZBGpJnw')
        .addFields(
            { name: 'Version', value: 'Cleaner v1'},
            { name: 'Last Edit', value: '16.12.2020'},
            { name: 'Creator Id', value: '627468155794489357'}
        )
        .setTimestamp()
        .setFooter('Cleaner All rights reserved.', 'https://i.imgur.com/2Ju83Y5.jpg');
    
    message.channel.send(exampleEmbed);
    }
}