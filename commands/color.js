const Disord = require ('discord.js');

exports.run = async (client, message, args) => {
  
  var string = args.join (" ");
  var colors = [
    {name:"verde", id:"731343504306864130"},
     {name:"vermelho", id:"731343561622159432"},
     {name:"ciano", id:"731343449437241424"},
     {name:"#090909", id:"407197921587757068"},
     {name:"#E6B3CC", id:"646808071930249236"}
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  }); 

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
    return message.channel.send(`${message.author} escreva o nome a após o comando.`)
  } else if (args[0].toLowerCase() === 'remove') {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author} suas cores foram resetadas ao padrão.`);
    } else if (!names.includes(string.toLowerCase()) || !role) {
      return message.channe.send(`${message.author} não existe a cor com esse nome ${string} neste servidor.`)
    } else {
      try {
        await message.member.roles.remove(ids);
        await message.member.roles.add(role);
        await message.delete().catch(O_o => {});
        return await message.channes.send(`${message.author} agora você ganhou a cor ${string}`);
      } catch (err) {
        console.log("Erro: " + err)

      }
    }


};
