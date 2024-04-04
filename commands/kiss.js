 const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media0.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.pinimg.com/originals/62/1c/ea/621ceac89636fc46ecaf81824f9fee0e.gif',
  'https://66.media.tumblr.com/ee3291bd540fa76515983a1ab258a5af/tumblr_pcstu8tPyU1wucl3to1_400.gif',
  'https://66.media.tumblr.com/e32206d2d51424eeb3c017c1ef0e80ad/fbe2f7e1b2143d0b-6a/s500x750/0280bd77e01a03bac8994f7a3c1aafa267abad0a.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} Beijou ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu ❤️')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}