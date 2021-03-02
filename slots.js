const slotItems = ["<:Grape:766897795277258792>", "<:Watermelon:766897795277258792>", "<:Orange:766897795277258792>", "<:Apple:766897795277258792>", "<:7_:766897795277258792>", "<:Strawberry:766897795277258792>", "<:Cherry:766897795277258792>", "<:Yoshi:766897795277258792>","<:Impostor:766897795277258792>","<:Rainbow_Yoshi:766897795277258792>",];
const db = require("quick.db");
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  

    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:Cross:618736602901905418> You are betting more than you have`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:Cross:618736602901905418> Hey dude, Slot Machines need money to work. S P E C I F Y  A N  A M O U N T  O F  M O N E Y  Y O U  W A N T  T O  B E T  L M A O .`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nNice job! You just won ${money} coins, that bet was amazing my man!`)
            .setColor("#00FF02")
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nLmao. You just lost ${money} coins, you suck at this. LOL!`)
            .setColor("#FF0000")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}
  
  module.exports.help = {
    name:"slots",
    aliases: ["sl"]
  }
