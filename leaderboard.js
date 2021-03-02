const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Idiot. You need to input a Leaderboard Option, here are your options.**\n\nCoin Leaderboard: Yoshi+leaderboard coins\nFresh Nikes Leaderboard: Yoshi+leaderboard nikes\nCar Leaderboard: Yoshi+leaderboard car\nMansion Leaderboard: Yoshi+leaderboard mansion`)
    .setColor("#FF0000")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'coins') {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor("#F1FF00")

    message.channel.send(embed)
  } else if(args[0] == 'yoshi') {
    let nike = db.startsWith(`nikes_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = bot.users.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Fresh Yoshi Sneakers Leaderboard**\n\n${content}`)
    .setColor("#00FF02")

    message.channel.send(embed)
  } else if(args[0] == 'car') {
    let cars = db.startsWith(`car_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < cars.length; i++) {
        let user = bot.users.get(cars[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${cars[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Car Leaderboard**\n\n${content}`)
    .setColor("RANDOM")

    message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let mansions = db.startsWith(`house_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < mansions.length; i++) {
        let user = bot.users.get(mansions[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
    }

  }

}
module.exports.help = {
  name:"leaderboard",
  aliases: ["leader","server wide","stats","server wide stats"]
}
