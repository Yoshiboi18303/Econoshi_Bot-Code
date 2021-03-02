const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('Yoshi+'))return;  

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription(`<:Cross:618736602901905418> Specify an amount to gamble | Yoshi+roulette <color> <amount>`);

let moneymore = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription(`<:Cross:618736602901905418> You are betting more than you have`);

let colorbad = new Discord.MessageEmbed()
.setColor("#FF0000")
.setDescription(`<:Cross:618736602901905418> Specify a color | Red [1.5x] Black [2x] Orange [3x] White [3.5x] Yellow [4x] Purple [4.5x] Blue [5x] Cyan [7.5x] Green [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "bl" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else if (colour == "y" || colour.includes("yellow")) colour = 3;
    else if (colour == "o" || colour.includes("orange"))  colour = 4;
    else if (colour == "b" || colour.includes("blue"))     colour = 5;
    else if (colour == "w" || colour.includes("white"))     colour = 6;
    else if (colour == "c" || colour.includes("cyan"))       colour = 7;
    else if (colour == "p" || colour.includes("purple"))      colour = 8;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Green:618767721361833995> HOLY!! You just won ${money} coins!!\n\nYour Multiplier is: 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#80800D")
        .setDescription(`<:Red:618767705444450342> Not bad. You just won ${money} coins.\n\nYour Multiplier is: 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#000000")
        .setDescription(`<:Black:618767682996666408> Cool! You just won ${money} coins!\n\nYour Multiplier is: 2x`);
        message.channel.send(moneyEmbed3)
    } else if (!isOdd(random) && colour == 0) { // Yellow
        money = parseInt(money * 4)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#F1FF00")
        .setDescription(`<:Yellow:618767682996666408> AMAZING! You just won ${money} coins!\n\nYour Multiplier is: 4x`);
        message.channel.send(moneyEmbed4)
    } else if (!isOdd(random) && colour == 0) { // Orange
        money = parseInt(money * 3)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed5 = new Discord.MessageEmbed()
        .setColor("#FFA800")
        .setDescription(`<:Orange:618767682996666408> Nice job! You just won ${money} coins!\n\nYour Multiplier is: 3x`);
        message.channel.send(moneyEmbed5)
    } else if (!isOdd(random) && colour == 0) { // Blue
        money = parseInt(money * 5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed6 = new Discord.MessageEmbed()
        .setColor("#001DFF")
        .setDescription(`<:Blue:618767682996666408> OH MY GOSH! You just won ${money} coins!\n\nYour Multiplier is: 5x`);
        message.channel.send(moneyEmbed6)
    } else if (!isOdd(random) && colour == 0) { // White
       money = parseInt(money * 3.5)
       db.add(`money_${message.guild.id}_${user.id}`, money)
       let moneyEmbed7 = new Discord.MessageEmbed()
       .setColor("#FFFFFF")
       .setDescription(`<:White:618767682996666408> Wow! You just won ${money} coins!\n\nYour Multiplier is: 3.5x`);
       message.channel.send(moneyEmbed7)
    } else if (!isOdd(random) && colour == 0) { // Cyan
       money = parseInt(money * 7.5)
       db.add(`money_${message.guild.id}_${user.id}`, money)
       let moneyEmbed8 = new Discord.MessageEmbed()
       .setColor("#00FFFF")
       .setDescription(`<:Cyan:618767682996666408> UFILKHIEFKJEGKEFKHJHEFK You just won ${money} coins!\n\nYour Multiplier is: 7.5x`)
       message.channel.send(moneyEmbed8)
    } else if (!isOdd(random) && colour == 0) { // Purple
       money = parseInt(money * 4.5)
       db.add(`money_${message.guild.id}_${user.id}`, money)
       let moneyEmbed9 = new Discord.MessageEmbed()
       .setColor("#8C00FF")
       .setDescription(`<:Purple:618767682996666408> Nice one! You just won ${money} coins!\n\nYour Multiplier is 4.5x`)
       message.channel.send(moneyEmbed9)


    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> You just lost ${money} coins, man you suck lmao.\n\nYour Multiplier is: 0x`);
        message.channel.send(moneyEmbed4)
    }
}

  
  module.exports.help = {
    name:"roulette",
    aliases: ["roul","gambling","spin","money","betting"]
  }
