const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('Yoshi+'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setDescription("<:Cross:618736602901905418> Lmao, you dumb idiothead. You don't have any money to deposit. Why did you even run this command if you don't have any money?")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#00FF02")
  .setDescription(`<:Check:618736570337591296> You have deposited all your coins into your bank, let's hope you don't get robbed lmao.`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:Cross:618736602901905418> Banks don't speak in tongues. You need to specify an amount to deposit for this command to work.`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:Cross:618736602901905418> Lmao, you dumb idiot. You can't deposit negative money into a bank. Did you really think that was a thing?`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`<:Cross:618736602901905418> Lmao, you dumb idiot. You don't have that much money, banks don't accept more money than you already have.`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#00FF02")
  .setDescription(`<:Check:618736570337591296> Cool. You have deposited ${args[0]} coins into your bank acoount.`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}
module.exports.help = {
  name:"deposit",
  aliases: ["dep"]
}
