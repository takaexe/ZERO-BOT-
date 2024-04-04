const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você não deveria estar usando este `comando` é melhor ja ir se explicando! "
    )
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
 
}
