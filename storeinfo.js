const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  
  
    if (args[0] == 'bronze') {
    
      let embed = new Discord.MessageEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more coins from robbing someone + Role in our Discord Server")
      .setColor("#A52A2A")
       message.channel.send(embed)
    } else if(args[0] == 'silver') {
      
      let embed = new Discord.MessageEmbed()
      .setDescription("**Silver Rank**\n\nBenefits: Chance to get even more coins from robbing someone, role in our Discord Server + Bragging Rights")
      .setColor("#FFFFFF")
       message.channel.send(embed)
    
    } else if(args[0] == 'gold') {

      let embed = new Discord.MessageEmbed()
      .setDescription("**Gold Rank**\n\nBenefits: Chance to get even EVEN more coins from robbing someone, role on our discord server + Bragging Rights")
      .setColor("#FFFE00")
       message.channel.send(embed)

    } else if (args[0] == 'platinum') {

      let embed = new Discord.MessageEmbed()
      .setDescription("**Platinum Rank**\n\nBenefits: Chance to get a TON more coins from robbing someone, role on our discord server + Even more Bragging Rights")
      .setColor("#E5E4E2")
       message.channel.send(embed)
    
    } else if (args[0] == 'super_vip') {

      let embed = new Discord.MessageEmbed()
      .setDescription("**Super Rank**\n\nBenefits: Chance to get a BOATLOAD more coins from robbing someone, role on our discord server + a TON more Bragging Rights")
      .setColor("#5F4B8BFF")
       message.channel.send(embed)

    
  } else if(args[0] == 'yoshi') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Fresh Yoshi Sneakers**\n\nBenefits: Chance to win coins + More by leading the leaderboard")
      .setColor("#19E00F")
       message.channel.send(embed)
    
  } else if(args[0] == 'car') {
     let embed = new Discord.MessageEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win coins + More by leading the leaderboard")
      .setColor("RANDOM")
       message.channel.send(embed)
  
  } else if(args[0] == 'mansion') {
     let embed = new Discord.MessageEmbed()
     .setDescription("**Mansion**\n\nBenefits: Chance to win coins + More by leading the leaderboard")
     .setColor("RANDOM")
        message.channel.send(embed)
  
  } else if(args[0] == 'laptop')  {
     let embed = new Discord.MessageEmbed()
     .setDescription("**Laptop**\n\nBenefits: Chance to win coins, can make videos (coming soon) + More by leading the leaderboard")
     .setColor("#191970")
       message.channel.send(embed)
    
  } else if(args[0] == 'aquarium') {
     let embed = new Discord.MessageEmbed()
      .setDescription("**Aquarium**\n\nBenefits: Chance to win coins, can add fish (coming soon!) + More by leading the leaderboard")
      .setColor("#0F1ACC")
        message.channel.send(embed)
  
  } else if(args[0] == 'oceanfront') {
     let embed = new Discord.MessageEmbed()
      .setDescription("**Oceanfront House**\n\nBenefits: Chance to win coins + More by leading the leaderboard")
      .setColor("#7fcdff")
        message.channel.send(embed)

  } else if(args[0] == 'lucky') {
     let embed = new Discord.MessageEmbed()
      .setDescription("**Lucky Clover**\n\nBenefits: Role on Discord Server + More luck on the Gambling Commands (coming soon!)")
      .setColor("#B5DE14")
        message.channel.send(embed)

  } else if(args[0] == 'pillow') {
     let embed = new Discord.MessageEmbed()
      .setDescription("**Lucky Pillow**\n\nBenefits: Role on Discord Server + More luck on the Gambling Commands (coming soon!)")
      .setColor("#DAEF8A")
        message.channel.send(embed)

  } else if(args[0] == 'reactor') {
     let aboutReactorEmbed = new Discord.MessageEmbed()
      .setDescription("**Reactor Core**\n\nBenefits: Coins every 10 minutes the Reactor Core is alive (coming soon!), Role on Discord Server, Safety Checks (coming soon!) + More by leading the leaderboard")
      .setColor("#6c1614")
        message.channel.send(aboutReactorEmbed)

  } else if(args[0] == 'coolant') {
     let aboutCoolantEmbed = new Discord.MessageEmbed()
      .setDescription("**Coolant**\n\nBenefits: Used to cool your Reactor Core a LOT (coming soon!)")
      .setColor("#14E3E8")
        message.channel.send(aboutCoolantEmbed)

  } else if(args[0] == 'water') {
     let aboutWaterEmbed = new Discord.MessageEmbed()
      .setDescription("**Water**\n\nBenefits: Used to cool your Reactor Core slightly (coming soon!)")
      .setColor("#d4f1f9")
        message.channel.send(aboutWaterEmbed)

  } else if(args[0] == 'heatant') {
     let aboutHeatantEmbed = new Discord.MessageEmbed()
      .setDescription("**Heatant**\n\nBenefits: Used to heat your Reactor Core a LOT (coming soon!)")
      .setColor("#C11D1D")
        message.channel.send(aboutHeatantEmbed)

  } else if(args[0] == 'heater') {
     let aboutHeaterEmbed = new Discord.MessageEmbed()
      .setDescription("**Heater**\n\nBenefits: Used to heat your Reactor Core slightly (coming soon!)")
      .setColor("#6246CB")
        message.channel.send(aboutHeaterEmbed)

  } else if(args[0] == 'reactorcon') {
     let aboutReactorContainmentEmbed = new Discord.MessageEmbed()
      .setDescription("**Reactor Containment**\n\nBenefits: Used to keep your Reactor Safe if all things go wrong (coming soon!)")
      .setColor("#BF4001")
        message.channel.send(aboutReactorContainmentEmbed)

  } else if(args[0] == 'security') {
     let aboutSecurityEmbed = new Discord.MessageEmbed()
      .setDescription("**Security**\n\nBenefits: Used to stop a Robber from robbing you (coming soon!)")
      .setColor("#00A0FF")
        message.channel.send(aboutSecurityEmbed)


  }

  }

  
  module.exports.help = {
    name:"storeinfo",
    aliases: ["si","info","store_info","benefit_info","about"]
  }
