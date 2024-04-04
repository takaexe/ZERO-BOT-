const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [ 'https://i.pinimg.com/originals/d8/7c/5c/d87c5cdd0a68caf2b6feeec0f7da7315.gif', 
'https://thumbs.gfycat.com/PoliticalCrazyFlycatcher-max-1mb.gif',
'https://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif',
'https://64.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gifv',
'https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif',
'https://31.media.tumblr.com/c63a48856edab67f2e5c9b9c8a10d21e/tumblr_mkglr72JO61s7y044o1_500.gif'

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! OMG`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('quanto amor :heart:')
        .setColor('#00ffff')
        .setDescription(`${message.author} acaba de dar todo o seu amor e carinho a  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ooown que fofo!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}