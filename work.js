const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 142420;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Hey dude, you have already worked once, you should sleep (don't work as late as my developer/owner lmao).\n\nTry working again in ${time.minutes}m ${time.seconds}s. I would recommend using some of the other commands on this bot in your downtime.`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic','Bot Developer','YouTuber','YouTube Pooper','Comedian','Cashier','Game Developer','Banker','Bank Teller','Babysitter','CEO','Website Developer','Music Producer','Police Chief','Asset Developer','Roblox Player','Roblox Developer','Random Coder',]

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> MONEY, MONEY AND MORE MONEY!! You worked as a ${replies[result]} and earned ${amount} coins, keep working and you'll be rich in no time (you're on a 142420 second timeout at the time this is sent, so be patient)!`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}
