const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('Ecoshi+'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    // Start



    // VIP Ranks

    let Embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
    .setDescription(`<:Cross:827985131889360956> Idiot. You need 5000 coins to purchase Bronze VIP.`);

    if (args[0] == 'bronze') {
        if (author < 5000) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)


        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Bronze VIP For 5000 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
        message.channel.send(Embed2)

    } else if(args[0] == 'silver') {
        let Embed = new Discord.MessageEmbed()

        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 10000 coins to purchase Silver VIP.`)

        if (author < 10000) return message.channel.send(Embed)

        db.fetch(`silver_${message.guild.id}_${user.id}`);
        db.set(`silver_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Silver VIP for 10000 Coins!`)

        db.subtract(`money_${message.guild.id}_${user.id}`, 10000)
        message.channel.send(Embed2)

    } else if(args[0] == 'gold') {
       let Embed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username}`) 
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 15000 coins to purchase Gold VIP.`)

       if (author < 15000) return message.channel.send(Embed)

       db.fetch(`gold_${message.guild.id}_${user.id}`)
       db.set(`gold_${message.guild.id}_${user.id}`, true)

       let Embed2 = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Gold VIP for 15000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 15000)
       message.channel.send(Embed2)


    } else if(args[0] == 'platinum') {
       let Embed = new Discord.MessageEmbed()

       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 20000 coins to purchase Platinum VIP.`)

       if (author < 20000) return message.channel.send(Embed)

       db.fetch(`platinum_${message.guild.id}_${user.id}`)
       db.set(`platinum_${message.guild.id}_${user.id}`, true)

       let Embed2 = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Platinum VIP for 20000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 20000)
       message.channel.send(Embed2)

    }  else if(args[0] == 'super') {
        let Embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 25000 coins to purchase Super VIP.`)

        if (author < 25000) return message.channel.send(Embed)

        db.fetch(`super_${message.guild.id}_${user.id}`)
        db.set(`super_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Super VIP for 25000 Coins!`)

        db.subtract(`money_${message.guild.id}_${user.id}`, 25000)
        message.channel.send(Embed2)

    } else if(args[0] == 'elite') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 69000 coins to purchase Elite VIP.`)

       if (author < 69000) return message.channel.send(buyFailureEmbed)

       db.fetch(`elite_${message.guild.id}_${user.id}`)
       db.set(`elite_${message.guild.id}_${user.id}`, true)

       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Elite VIP for 69000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 69000)
       message.channel.send(buySuccessEmbed)

      // Lifestyle Items

    } else if(args[0] == 'yoshi') {
        let Embed2 = new Discord.MessageEmbed()

        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username}`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 600 coins to purchase some Yoshi Sneakers.`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`yoshis_${message.guild.id}_${user.id}`)
        db.add(`yoshis_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased Fresh Yoshi Sneakers For 600 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)

    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 800 coins to purchase a new car.`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a New Car from the Dealership (wherever the hell that is lmao) For 800 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)

    } else if(args[0] == 'laptop') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 420 coins to purchase a laptop.`)

        if (author < 420) return message.channel.send(Embed2)

        db.fetch(`laptop_${message.guild.id}_${user.id}`)
        db.add(`laptop_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Laptop For 420 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 420)
        message.channel.send(Embed3)

    } else if(args[0] == 'aquarium') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 969 coins to purchase an Aquarium.`)

        if (author < 969) return message.channel.send(Embed2)

        db.fetch(`aquarium_${message.guild.id}_${user.id}`)
        db.add(`aquarium_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased an Aquarium for 969 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 969)
        message.channel.send(Embed3)

    } else if(args[0] == 'PC') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 100000 coins to purchase an Expensive PC`)

       if (author < 100000) return message.channel.send(buyFailureEmbed)

       db.fetch(`PC_${message.guild.id}_${user.id}`)
       db.add(`PC_${message.guild.id}_${user.id}`, 1)

       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased an Expensive PC for 100000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 100000)
       message.channel.send(buySuccessEmbed)

       // Furniture

     } else if(args[0] == 'curtains') {
        let buyFailureEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 1250 coins to purchase some Curtains.`)

        if (author < 1250) return message.channel.send(buyFailureEmbed)

        db.fetch(`curtains_${message.guild.id}_${user.id}`)
        db.add(`curtains_${message.guild.id}_${user.id}`, 1)

        let buySuccessEmbed = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased some Curtains for 1250 Coins!`)

        db.subtract(`money_${message.guild.id}_${user.id}`, 1250)
        message.channel.send(buySuccessEmbed)

       // Buildings

     } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
        .setDescription(`<:Cross:827985131889360956> Idiot. You need 1200 coins to purchase a Mansion.`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#00FF02")
        .setFooter(`Successful Purchase made by ${message.author.username}`)
        .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Mansion For 1200 Coins!`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)

    } else if(args[0] == 'oceanfront') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 6969 coins to purchase an Oceanfront House`)

       if (author < 6969) return message.channel.send(buyFailureEmbed)

       db.fetch(`oceanfront_${message.guild.id}_${user.id}`)
       db.add(`oceanfront_${message.guild.id}_${user.id}`, 1)

       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased an Oceanfront House for 6969 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 6969)
       message.channel.send(buySuccessEmbed)

       // Extra Items

    } else if(args[0] == 'lucky') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000") 
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 500 coins to purchase a Lucky Clover`)

       if (author < 500) return message.channel.send(buyFailureEmbed)

       db.fetch(`lucky_${message.guild.id}_${user.id}`)
       db.set(`lucky_${message.guild.id}_${user.id}`, true)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Lucky Clover for 500 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 500)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'pillow') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 900 coins to purchase a Lucky Pillow`)

       if (author < 900) return message.channel.send(buyFailureEmbed)

       db.fetch(`pillow_${message.guild.id}_${user.id}`)
       db.set(`pillow_${message.guild.id}_${user.id}`, true)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Lucky Pillow for 900 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 900)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'DJSET') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 5900 coins to purchase a DJ Set.`)

       if (author < 5900) return message.channel.send(buyFailureEmbed)

       db.fetch(`DJ_${message.guild.id}_${user.id}`)
       db.add(`DJ_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a DJ Set for 5900 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 5900)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'reactor') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 9999 coins to purchase a Reactor Core`)

       if (author < 9999) return message.channel.send(buyFailureEmbed)

       db.fetch(`reactor_${message.guild.id}_${user.id}`)
       db.add(`reactor_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Reactor Core for 9999 Coins (please take care of it)!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 9999)
       message.channel.send(buySuccessEmbed)

      // Reactor Core Items

    } else if(args[0] == 'coolant') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 650 coins to purchase a Coolant Tank.`)

       if (author < 650) return message.channel.send(buyFailureEmbed)

       db.fetch(`coolant_${message.guild.id}_${user.id}`)
       db.add(`coolant_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Coolant Tank for 650 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 650)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'water') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 100 coins to purchase some Water.`)

       if (author < 100) return message.channel.send(buyFailureEmbed)

       db.fetch(`water_${message.guild.id}_${user.id}`)
       db.add(`water_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased some Water for 100 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 100)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'heatant') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username}`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 700 coins to purchase a Heatant Tank.`)

       if (author < 700) return message.channel.send(buyFailureEmbed)

       db.fetch(`heatant_${message.guild.id}_${user.id}`)
       db.add(`heatant_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Heatant Tank for 700 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 700)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'heater') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 150 coins to purchase a Heater.`)

       if (author < 150) return message.channel.send(buyFailureEmbed)

       db.fetch(`heater_${message.guild.id}_${user.id}`)
       db.add(`heater_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Heater for 150 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 150)
       message.channel.send(buySuccessEmbed)

    } else if(args[0] == 'reactorcon') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 999 coins to purchase a Reactor Containment.`)

       if (author < 999) return message.channel.send(buyFailureEmbed)

       db.fetch(`reactorcontainment_${message.guild.id}_${user.id}`)
       db.add(`reactorcontainment_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Reactor Containment for 999 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 999)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'security') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 1250 coins to hire a Security.`)

       if (author < 1250) return message.channel.send(buyFailureEmbed)

       db.fetch(`security_${message.guild.id}_${user.id}`)
       db.add(`security_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've hired a Security for 1250 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 1250)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'cw') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 1800 coins to hire a Core Watcher.`)

       if (author < 1800) return message.channel.send(buyFailureEmbed)

       db.fetch(`core_watcher_${message.guild.id}_${user.id}`)
       db.add(`core_watcher_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've hired a Core Watcher for 1800 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 1800)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'nuclear') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 29000 coins to purchase a Nuclear Plant.`)

       if (author < 29000) return message.channel.send(buyFailureEmbed)

       db.fetch(`nuclear_plant_${message.guild.id}_${user.id}`)
       db.add(`nuclear_plant_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Nuclear Plant for 29000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 29000)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'nerf') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 690 coins to purchase a NERF Gun.`)

       if (author < 690) return message.channel.send(buyFailureEmbed)

       db.fetch(`nerf_${message.guild.id}_${user.id}`)
       db.add(`nerf_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a NERF Gun for 690 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 690)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'warhead') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 1300 coins to purchase a Warhead.`)

       if (author < 1300) return message.channel.send(buyFailureEmbed)

       db.fetch(`warhead_${message.guild.id}_${user.id}`)
       db.add(`warhead_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Warhead for 1300 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 1300)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'GTV') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 23000 coins to purchase a Giant TV.`)

       if (author < 23000) return message.channel.send(buyFailureEmbed)

       db.fetch(`GiantTV_${message.guild.id}_${user.id}`)
       db.add(`GiantTV_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Giant TV for 23000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 23000)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'Paint') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 690 coins to purchase a Painting.`)

       if (author < 690) return message.channel.send(buyFailureEmbed)

       db.fetch(`Paint_${message.guild.id}_${user.id}`)
       db.add(`Paint_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Painting for 690 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 690)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'DJ') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 16900 coins to hire a DJ.`)

       if (author < 16900) return message.channel.send(buyFailureEmbed)

       db.fetch(`DJP_${message.guild.id}_${user.id}`)
       db.add(`DJP_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've hired a DJ for 16900 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 16900)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'NC') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 70000 coins to buy a Nightclub.`)

       if (author < 70000) return message.channel.send(buyFailureEmbed)

       db.fetch(`NC_${message.guild.id}_${user.id}`)
       db.add(`NC_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Nightclub for 70000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 70000)
       message.channel.send(buySuccessEmbed)


    } else if(args[0] == 'Sky') {
       let buyFailureEmbed = new Discord.MessageEmbed()
       .setColor("#FF0000")
       .setFooter(`Failed Purchase made by the Idiotic ${message.author.username} lmao.`)
       .setDescription(`<:Cross:827985131889360956> Idiot. You need 150000 coins to buy a Skyscraper.`)

       if (author < 150000) return message.channel.send(buyFailureEmbed)

       db.fetch(`Sky_${message.guild.id}_${user.id}`)
       db.add(`Sky_${message.guild.id}_${user.id}`, 1)


       let buySuccessEmbed = new Discord.MessageEmbed()
       .setColor("#00FF02")
       .setFooter(`Successful Purchase made by ${message.author.username}`)
       .setDescription(`<:Check:827985162519445524> Nice job! You've purchased a Skyscraper for 150000 Coins!`)

       db.subtract(`money_${message.guild.id}_${user.id}`, 150000)
       message.channel.send(buySuccessEmbed)

    } else {
        let noItemSpecifiedErrorEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription('<:Cross:827985131889360956> Hey man, you need to enter an item to buy for this command to function correctly! Run Ecoshi+store for all the valid Responses!')
        message.channel.send(noItemSpecifiedErrorEmbed)

    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: ["get","purchase","own"]
  }
