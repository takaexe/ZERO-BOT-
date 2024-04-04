
command(client, 'kick', (messsage) => {
const { member, mentions } = message 

const tag = `<@${member.id}>`

if (
  member.hasPermmission('ADMINISTRADOR') ||
  member.hasPermmission('KICK_MEMBERS') 
) {
  const target = mentions.users.first()
  if (target) {
    const targetMember = message.guild.members.cache.get(target.id)
    targetmember.kick()
    memssage.channel.send(`${tag} Thaht user has kicked`)
  } else {
    message.channel.send(`${tag}Please spectify to ban.`)
  }
} else {
message.channel.send(
  `${tag} You do not have permission to use this command.`)
}
})
