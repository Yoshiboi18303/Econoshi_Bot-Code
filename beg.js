const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('Yoshi+'))return;  

  let user = message.author;

  let timeout = 142420;
  let amount = 10;

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:Cross:618736602901905418> Hey man, y- you should do something other than beg all the time.\n\nTry this again in ${time.minutes}m ${time.seconds}s. I would recommend using some of the other commands on this bot in your downtime.`);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#00FF02")
  .setDescription(`<:Check:618736570337591296> You've begged for money and received ${amount} coins from the random person you begged money from. Beggar idiot lmao.`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"beg",
  aliases: ["beggar","low_money"]
}
