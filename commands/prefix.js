const db = require('wio.db')

module.exports = {
    name: "prefix",
    description: "change prefix",

    async run (client, message, komut) {
        var args = komut[0]

        if(!args) return message.channel.send("Please enter a prefix!")
        
        if(args.length > 6) return message.channel.send("you must enter word less than 6")
       
        db.set("prefix_" + message.guild.id, args)

        message.channel.send("The new prefif ``" + args + "`` has been setted.")
    }
}