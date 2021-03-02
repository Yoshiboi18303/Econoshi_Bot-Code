const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  


    let help_embed = new Discord.MessageEmbed()
    .setTitle("Econoshi_Bot Help/Commands. Default Prefix --> [Prefix Yoshi+]")
    .addField("Economy Commands", "`work` `beg` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell`")
    .addField("Gambling Commmands", "`roulette` `slots`")
    .addField("Economy Extra Commands", "`storeinfo [item]`")
    .setColor("RANDOM")
    message.channel.send(help_embed)




}

module.exports.help = {
  name:"help",
  aliases: ["h"]
}
