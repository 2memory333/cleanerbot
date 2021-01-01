const Discord = require('discord.js')

const db = require("wio.db")

const client = new Discord.Client();

const token = ""

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log("bot hazir!");
    setInterval(() => {
    client.user.setActivity('SERVERS IN " ' + client.guilds.cache.size + ' " ,  !commands ', { type: 'PLAYING' });
}, 1000 * 60 * 5);
});

client.on("message", async message => {

    if(!await db.has("prefix_" + message.guild.id)) {
        var prefix = "!"
     } else {
        var prefix = await db.fetch("prefix_" + message.guild.id)
     }

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const komut = message.content.slice(prefix.length).trim().split(/ +/);
        const command = komut.shift().toLowerCase();
        
        if(!client.commands.has(command)) return;

        try {
            client.commands.get(command).run(client, message, komut);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(token);
