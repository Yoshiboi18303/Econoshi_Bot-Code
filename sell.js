const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  
    
    let user = message.author;

    if(args[0] == 'yoshi') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Hey dude, money doesn't come from a Nonexistent Item. You don't have any Yoshi Sneakers to sell, please make more sense next time lmao.`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> You have sold Fresh Yoshi Sneakers and the store/bank has given back 600 Coins. Feel free to buy them again in the shop!`);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)

    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Hey dude, money doesn't come from a Nonexistent Item. You don't have a Car to sell, please make more sense next time lmao.`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> You have sold a Car and the dealership has given back 800 Coins. Feel free to buy another car in the shop!`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)

    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Hey dude, money doesn't come from a Nonexistent Item. You don't have a Mansion to sell, please make more sense next time lmao.`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> You have sold a Mansion and the landlord has given back 1200 Coins. Feel free to buy another Mansion in the shop!`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)

    } else if(args[0] == 'laptop') {
       let Embed2 = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Hey dude, money doesn't come from a Nonexistent Item. You don't have a Laptop to sell, please make more sense next time lmao.`);

       let laptops = await db.fetch(`laptop_${message.guild.id}_${user.id}`)

       if (laptops < 1) return message.channel.send(Embed2)

       db.fetch(`laptop_${message.guild.id}_${user.id}`)
       db.subtract(`laptop_${message.guild.id}_${user.id}`, 1)

       let Embed3 = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> You have sold a Laptop and the shop has given you back 420 Coins. Feel free to buy another Laptop in the shop! :)`);

       db.add(`money_${message.guild.id}_${user.id}`, 420)
       message.channel.send(Embed3)


    } else if(args[0] == 'aquarium') {
       let Embed2 = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Hey dude, money doesn't come from a Nonexistent Item. You don't have an Aquarium to sell, please make more sense next time lmao.`);

       let aquariums = await db.fetch(`aquarium_${message.guild.id}_${user.id}`)

       if (aquariums < 1) return message.channel.send(Embed2)

       db.fetch(`aquarium_${message.guild.id}_${user.id}`)
       db.subtract(`aquarium_${message.guild.id}_${user.id}`, 1)

       let Embed3 = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> You have sold an Aquarium and the shop has given you back 969 Coins. Feel free to buy another Aquarium in the shop! :)`);

       db.add(`money_${message.guild.id}_${user.id}`, 969)
       message.channel.send(Embed3)

    } else if(args[0] == 'oceanfront') {
       let sellFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Hey dude, money doesn't come from a Nonexistent Item. You don't have an Oceanfront House to sell, please make more sense next time lmao.`);

       let oceanfront = await db.fetch(`oceanfront_${message.guild.id}_${user.id}`)

       if (oceanfront < 1) return message.channel.send(sellFailureEmbed)

       db.fetch(`aquarium_${message.guild.id}_${user.id}`)
       db.subtract(`aquarium_${message.guild.id}_${user.id}`, 1)

       let sellSuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> You have sold an Oceanfront House and the Landlord has given you back 6969 Coins. Feel free to buy another Oceanfront House in the shop! :)`)

       db.add(`money_${message.guild.id}_${user.id}`, 6969)
       message.channel.send(sellSuccessEmbed)



  };

}


  
  module.exports.help = {
    name:"sell",
    aliases: ["money back","sell"]
  }
