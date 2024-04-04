const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")

module.exports.run = async (client, message, args) => {

  let embed = new MessageEmbed()
  .setTitle("Me convide para o seu servidor!")
  .setColor("RED")
  .setDescription(`[CLICK AQUI](${inviteURL}) :heart:`); //Looks Cool
    
    
message.channel.send(embed);
  
}
