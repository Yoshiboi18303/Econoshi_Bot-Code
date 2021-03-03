const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Yoshi+'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`<:Cross:618736602901905418> Idiot. You need 1500 coins to purchase Bronze VIP.`);

    if (args[0] == 'bronze') {
        if (author < 1500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)


        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased Bronze VIP For 1500 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1500)
        message.channel.send(Embed2)

    } else if(args[0] == 'silver') {
        let Embed = new Discord.MessageEmbed()

        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 5000 coins to purchase Silver VIP.`)

        if (author < 5000) return message.channel.send(Embed)

        db.fetch(`silver_${message.guild.id}_${user.id}`);
        db.set(`silver_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736602901905418> Nice job! You've purchased Silver VIP for 5000 Coins!`)

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed2)

    } else if(args[0] == 'gold') {
       let Embed = new Discord.MessageEmbed()

       .setColor("#FF0000")   
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 7500 coins to purchase Gold VIP.`)

       if (author < 7500) return message.channel.send(Embed)

       db.fetch(`gold_${message.guild.id}_${user.id}`)
       db.set(`gold_${message.guild.id}_${user.id}`, true)

       let Embed2 = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> Nice job! You've purchased Gold VIP for 7500 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 7500)
       message.channel.send(Embed2)


    } else if(args[0] == 'platinum') {
       let Embed = new Discord.MessageEmbed()

       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 10000 coins to purchase Platinum VIP.`)

       if (author < 10000) return message.channel.send(Embed)

       db.fetch(`platinum_${message.guild.id}_${user.id}`)
       db.set(`platinum_${message.guild.id}_${user.id}`, true)

       let Embed2 = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> Nice job! You've purchased Platinum VIP for 10000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 10000)
       message.channel.send(Embed2)

    }  else if(args[0] == 'super') {
        let Embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 15000 coins to purchase Super VIP.`)

        if (author < 15000) return message.channel.send(Embed)

        db.fetch(`super_${message.guild.id}_${user.id}`)
        db.set(`super_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased Super VIP for 15000 Coins!`)

        db.subtract(`money_${message.guild.id}_${user.id}`, 15000)
        message.channel.send(Embed2)



    } else if(args[0] == 'yoshi') {
        let Embed2 = new Discord.MessageEmbed()

        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 600 coins to purchase some Yoshi Sneakers.`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased Fresh Yoshi Sneakers For 600 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 800 coins to purchase a new car.`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased a New Car from the Dealership (wherever the hell that is lmao) For 800 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 1200 coins to purchase a Mansion.`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased a Mansion For 1200 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)

    } else if(args[0] == 'laptop') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 420 coins to purchase a laptop.`)

        if (author < 420) return message.channel.send(Embed2)

        db.fetch(`laptop_${message.guild.id}_${user.id}`)
        db.add(`laptop_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased a Laptop For 420 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 420)
        message.channel.send(Embed3)


    } else if(args[0] == 'aquarium') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription(`<:Cross:618736602901905418> Idiot. You need 969 coins to purchase an Aquarium.`)

        if (author < 969) return message.channel.send(Embed2)

        db.fetch(`aquarium_${message.guild.id}_${user.id}`)
        db.add(`aquarium_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setDescription(`<:Check:618736570337591296> Nice job! You've purchased an Aquarium for 969 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 969)
        message.channel.send(Embed3)

    } else if(args[0] == 'oceanfront') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 6969 coins to purchase an Oceanfront House`)

       if (author < 6969) return message.channel.send(buyFailureEmbed)

       db.fetch(`oceanfront_${message.guild.id}_${user.id}`)
       db.add(`oceanfront_${message.guild.id}_${user.id}`, 1)

       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> Nice job! You've purchased an Oceanfront House for 6969 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 6969)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'lucky') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000") 
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 500 coins to purchase a Lucky Clover`)

       if (author < 500) return message.channel.send(buyFailureEmbed)

       db.fetch(`lucky_${message.guild.id}_${user.id}`)
       db.set(`lucky_${message.guild.id}_${user.id}`, true)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> Nice job! You've purchased a Lucky Clover for 500 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 500)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'pillow') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 900 coins to purchase a Lucky Pillow`)

       if (author < 900) return message.channel.send(buyFailureEmbed)

       db.fetch(`pillow_${message.guild.id}_${user.id}`)
       db.set(`pillow_${message.guild.id}_${user.id}`, true)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736570337591296> Nice job! You've purchased a Lucky Pillow for 900 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 900)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'reactor') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 9999 coins to purchase a Reactor Core`)

       if (author < 9999) return message.channel.send(buyFailureEmbed)

       db.fetch(`reactor_${message.guild.id}_${user.id}`)
       db.add(`reactor_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've purchased a Reactor Core for 9999 Coins (please take care of it)!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 9999)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'coolant') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 650 coins to purchase a Coolant Tank.`)

       if (author < 650) return message.channel.send(buyFailureEmbed)

       db.fetch(`coolant_${message.guild.id}_${user.id}`)
       db.add(`coolant_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've purchased a Coolant Tank for 650 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 650)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'water') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 100 coins to purchase some Water.`)

       if (author < 100) return message.channel.send(buyFailureEmbed)

       db.fetch(`water_${message.guild.id}_${user.id}`)
       db.add(`water_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've purchased some Water for 100 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 100)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'heatant') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 700 coins to purchase a Heatant Tank.`)

       if (author < 700) return message.channel.send(buyFailureEmbed)

       db.fetch(`heatant_${message.guild.id}_${user.id}`)
       db.add(`heatant_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've purchased a Heatant Tank for 700 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 700)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'heater') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 150 coins to purchase a Heater.`)

       if (author < 150) return message.channel.send(buyFailureEmbed)

       db.fetch(`heater_${message.guild.id}_${user.id}`)
       db.add(`heater_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've purchased a Heater for 150 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 150)
       message.channel.send(buySuccessEmbed)

    } else if(args[0] == 'reactorcon') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 999 coins to purchase a Reactor Containment.`)

       if (author < 999) return message.channel.send(buyFailureEmbed)

       db.fetch(`reactorcontainment_${message.guild.id}_${user.id}`)
       db.add(`reactorcontainment_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've purchased a Reactor Containment for 999 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 999)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'security') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setDescription(`<:Cross:618736602901905418> Idiot. You need 1250 coins to hire a Security.`)

       if (author < 1250) return message.channel.send(buyFailureEmbed)

       db.fetch(`security_${message.guild.id}_${user.id}`)
       db.add(`security_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setDescription(`<:Check:618736602901905418> Nice job! You've hired a Security for 1250 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 1250)
       message.channel.send(buySuccessEmbed)


    } else {
        let noItemSpecifiedFailureEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription('<:Cross:618736602901905418> Hey man, you need to enter an item to buy for this command to function correctly! Run Yoshi+store for all the valid Responses!')
        message.channel.send(noItemSpecifiedFailureEmbed)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: ["get","purchase","own"]
  }
