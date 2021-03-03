const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze VIP: 1500 Coins [Yoshi+buy bronze]\nSilver VIP: 5000 Coins [Yoshi+buy silver]\nGold VIP: 7500 Coins [Yoshi+buy gold]\nPlatinum VIP: 10000 Coins [Yoshi+buy platinum]\nSuper VIP: 15000 Coins [Yoshi+buy super]\n\n**Lifestyle Items**\n\nFresh Yoshi Sneakers: 600 [Yoshi+buy yoshi]\nCar: 800 [Yoshi+buy car]\nLaptop: 420 Coins [Yoshi+buy laptop]\nAquarium: 969 Coins [Yoshi+buy aquarium]\n\n**Extra Items**\n\nLucky Clover: 500 Coins [Yoshi+buy lucky]\nLucky Pillow: 900 Coins [Yoshi+buy pillow]\nReactor Core: 9999 Coins [Yoshi+buy reactor]\n\n**Reactor Core Items**\n\nCoolant Tank: 650 Coins [Yoshi+buy coolant]\nWater: 100 Coins [Yoshi+buy water]\nHeatant Tank: 700 Coins [Yoshi+buy heatant]\nHeater: 150 Coins [Yoshi+buy heater]\nReactor Containment: 999 Coins [Yoshi+buy reactorcon]\n\n**Buildings**\n\nMansion: 1200 Coins [Yoshi+buy mansion]\nOceanfront House: 6969 Coins [Yoshi+buy oceanfront]\n\n**People**\n\nSecurity: 1250 Coins [Yoshi+buy security]")
    .setColor("RANDOM")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st","store"]
}
