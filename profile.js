const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('Yoshi+'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let bronze_vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(bronze_vip === null) bronze_vip = 'No'
    if(bronze_vip === true) bronze_vip = 'Purchased/Owned'

  let silver_vip = await db.fetch(`silver_${message.guild.id}_${user.id}`)
    if(silver_vip === null) silver_vip = 'No'
    if(silver_vip === true) silver_vip = 'Purchased/Owned'

  let gold_vip = await db.fetch(`gold_${message.guild.id}_${user.id}`)
    if(gold_vip === null) gold_vip = 'No'
    if(gold_vip === true) gold_vip = 'Purchased/Owned'

  let platinum_vip = await db.fetch(`platinum_${message.guild.id}_${user.id}`)
    if(platinum_vip === null) platinum_vip = 'No'
    if(platinum_vip === true) platinum_vip = 'Purchased/Owned'

  let super_vip = await db.fetch(`super_${message.guild.id}_${user.id}`)
    if(super_vip === null) super_vip = 'No'
    if(super_vip === true) super_vip = 'Purchased/Owned'

  let lucky_clover = await db.fetch(`lucky_${message.guild.id}_${user.id}`)
    if(lucky_clover === null) lucky_clover = 'No'
    if(lucky_clover === true) lucky_clover = 'Purchased/Owned'


  let lucky_pillow = await db.fetch(`pillow_${message.guild.id}_${user.id}`)
    if(lucky_pillow === null) lucky_pillow = 'No'
    if(lucky_pillow === true) lucky_pillow = 'Purchased/Owned'

  
  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let laptop = await db.fetch(`laptop_${message.guild.id}_${user.id}`)
  if(laptop === null) laptop = '0'

  let aquarium = await db.fetch(`aquarium_${message.guild.id}_${user.id}`)
  if(aquarium === null) aquarium = '0'

  let oceanfront = await db.fetch(`oceanfront_${message.guild.id}_${user.id}`)
  if(oceanfront === null) oceanfront = '0'

  let reactor = await db.fetch(`reactor_${message.guild.id}_${user.id}`)
  if(reactor === null) reactor = '0'

  let coolant = await db.fetch(`coolant_${message.guild.id}_${user.id}`)
  if(coolant === null) coolant = '0'

  let water = await db.fetch(`water_${message.guild.id}_${user.id}`)
  if(water === null) water = '0'

  let heatant = await db.fetch(`heatant_${message.guild.id}_${user.id}`)
  if(heatant === null) heatant = '0'

  let heater = await db.fetch(`heater_${message.guild.id}_${user.id}`)
  if(heater === null) heater = '0'

  let reactorcon = await db.fetch(`reactorcontainment_${message.guild.id}_${user.id}`)
  if(reactorcon === null) reactorcon = '0'

  let security = await db.fetch(`security_${message.guild.id}_${user.id}`)
  if(security === null) security = '0'


  


  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#00FF02")
  .setDescription(`**${user}'s Profile**\n\n**Money**\n\n Pocket: ${money}\nBank: ${bank}\n\n**VIP Rank Statuses**\n\nBronze VIP: ${bronze_vip}\nSilver VIP: ${silver_vip}\nGold VIP: ${gold_vip}\nPlatinum VIP: ${platinum_vip}\nSuper VIP: ${super_vip}\n\n**Other Item Statuses**\n\nLucky Clover: ${lucky_clover}\nLucky Pillow: ${lucky_pillow}\n\n**Inventory**\n\nYoshi Sneakers: ${shoes}\nCars: ${newcar}\nMansions: ${newhouse}\nLaptops: ${laptop}\nAquariums: ${aquarium}\nOceanfront Houses: ${oceanfront}\n Reactor Cores: ${reactor}\n\n**Reactor Core Items Inventory**\n\nCoolant Tanks: ${coolant}\nWater Bottles: ${water}\nHeatant Tanks: ${heatant}\nHeaters: ${heater}\nReactor Containments: ${reactorcon}\n\n**Hired People**\n\nSecurity: ${security}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["pro","inventory","status"]
}
