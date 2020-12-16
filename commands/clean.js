const Discord = require('discord.js')

module.exports = {
    name: "clean",
    description: "clears messages",

    async run (client, message, args) {
      const amount = args.join(" ");

      if(amount < 101)
      {
         return message.channel.messages.fetch({limit: amount}).then(messages => {
          message.channel.bulkDelete(messages)
          .then(messages => message.channel.send(`I have cleaned "${messages.size}" messages in total.`))
      });
      }

      if(amount > 1000)  return message.reply('Do you want to clean more than 1000? Then you can use "!renew" or "!wipe" commands.')

      var tekrar = amount.substring(0, 1);
      if (amount == 1000) tekrar = 10;

      var kalan = amount % 100;

        async function wipe() {
          var msg_size = 100;
          while (msg_size == 100) {
           for(var a = 1; a <= tekrar; a++)
           {
             if(a == tekrar + 1) await message.channel.bulkDelete(kalan)
            await message.channel.bulkDelete(100)
            .then(messages => msg_size = messages.size)
            .catch(console.error);
           }
        }
      }
        wipe()
    }
}