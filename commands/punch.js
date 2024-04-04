const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/9fc73d84755865fd0e8a67fe6fad9f0f/tenor.gif',
  'https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif',
  'https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif',
  'https://media1.tenor.com/images/4e1c688f7666adb0f68bb4995e47e0ef/tenor.gif',
  'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
  'https://i.gifer.com/9eUJ.gif',
  'https://thumbs.gfycat.com/TeemingMeekGrouse-size_restricted.gif',
  'https://66.media.tumblr.com/a3a036b49974fc6a959523a8c2d6f677/tumblr_p8zgtvrr5e1r55oyno1_400.gifv',
  'https://data.whicdn.com/images/53973202/original.gif'

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário para bater!');
}
/*
message.channel.send(`${message.author.username} **acaba de bater** ${user.username}! :punch:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Soco!')
        .setColor('#00ffff')
        .setDescription(`${message.author} acabou de bater em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Briga? 😨')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
