const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Canvas = require('canvas');
const { registerFont, createCanvas } = require('canvas')
registerFont('comicsans.ttf', { family: 'Comic Sans' })
 

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos



client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});


const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px comicsans`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(channel => channel.name == 'cornos-aqui-🤕');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f258906d-0d0b-42ee-bd1a-c4c0a8df46c9/d6514j7-0857166d-6027-4e8e-8b39-5aca87e7b2e6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjI1ODkwNmQtMGQwYi00MmVlLWJkMWEtYzRjMGE4ZGY0NmM5XC9kNjUxNGo3LTA4NTcxNjZkLTYwMjctNGU4ZS04YjM5LTVhY2E4N2U3YjJlNi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.HjirdRr1h-EBTDNXooI7cCYPDcT4BDCiujxEHOTP9r8');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

// Slightly smaller text placed above the member's display name
	ctx.font = '28px comicsans';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(' Bem vindo(a ', canvas.width / 2.5, canvas.height / 3.5);


	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.gif');

		channel.send(`**Boas vindas :D,** ${member}!`, attachment);
});

client.on('message', message => {
	if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member);
	}
});
  

client.on("guildMemberRemove", member =>{
  const channel = member.guild.channels.cache.find(channel => channel.name === "cornos-aqui-🤕");
  if(!channel) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Adeus!`)
      .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setFooter("Código de Taka.exe")
      .setTimestamp();
    channel.send(embed);
});











client.login(process.env.TOKEN);//Ligando o Bot caso ele consiga acessar o token