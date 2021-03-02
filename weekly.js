const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('Yoshi+'))return;  

  let user = message.author;
  let timeout = 604800000;
  let amount = 500;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:Cross:618736602901905418> You can't collect the Weekly Chest right now.\n\nYou can collect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s though! `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#00FF02")
  .setDescription(`<:Check:618736570337591296> You've collected the Weekly Chest which had ${amount} coins in it! You now need to wait a week for the next one. Have fun with your money!`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"weekly",
  aliases: ["week","weekly_money"]
}
