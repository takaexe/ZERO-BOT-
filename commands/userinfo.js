const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports.config = {
  name: "userinfo",
  description: "ver informações do usuário no discord.",
  usage: "#userinfo",
  aliases: []
};

const status = {
  online: "Online",
  idle: "Ausente",
  dnd: "Não perturbe",
  offline: "Offline/invisível"
};
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });


exports.run = async (client, message, args) => {
  
  var member
  let userText = args.join(" ").toLowerCase()
  if (!userText) {
    member = message.member
  }
  else {
    member = message.mentions.members.first() || message.guild.members.filter(m => m.displayName.toLowerCase() == userText).first() || message.guild.members.filter(m => m.user.username.toLowerCase() == userText).first() || message.guild.members.find('id', args[0]) || message.guild.members.filter(m => m.displayName.toLowerCase().indexOf(userText) != -1).first() || message.guild.members.filter(m => m.user.username.toLowerCase().indexOf(userText) != -1).first()
  }
  if (!member) return message.reply("Desculpe, não encontrei o usuário que você procura!");

  const embed = new Discord.MessageEmbed()
    .setColor("#7c2ae8")
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL()}`)
    .addField("Nickname no servidor:", `${member.nickname ? `${member.nickname}` : "Sem nickname"}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Entrou no servidor em", (member.joinedAt).formatDate('DD/MM/YYYY, às HH:mm:ss', date));
    .addField("Criado em", (member.user.createdAt).formatDate('DD/MM/YYYY, às HH:mm:ss', date));
    member.roles.size >= 1 ? embed.setFooter(`tem ${member.roles.size - 1} cargo(s)`) : embed.setFooter(`tem 0 cargos`)
  message.channel.send({embed});
};

function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}