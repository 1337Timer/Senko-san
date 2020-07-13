const { Collection } = require('discord.js');
const { PREFIX } = require('../../config');

module.exports = async (client, message) => {
  if(!message.content.startsWith(PREFIX) || message.author.bot) return;
  
  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const user = message.mentions.users.first();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if(command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply("<:SenkoThinking:732192434137727057> Tu ne possède pas les permissions nécessaires pour éxecuter cette commande.");

  if (command.help.args && !args.length) {
      let noArgsReply = `<:SenkoThinking:732192434137727057> Cette commande nécessite des arguments !`;

      if(command.help.usage) noArgsReply += `\n <:IconJoin:731919767425777806> Voici comment utiliser cette commande : \`${PREFIX}${command.help.name} ${command.help.usage}\``;

      return message.channel.send(noArgsReply);
    };

  if(command.help.isUserAdmin && !user) return message.reply('Tu dois mentionner un utilisateur.');

  if(command.help.isUserAdmin && message.guild.member(user).hasPermission('BAN_MEMBERS')) return message.reply(" <:SenkoThinking:732192434137727057> Tu ne peux pas utiliser cette commande sur cette utilisateur.");
  
  if(!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  };

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 0) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(` <:SenkoThinking:732192434137727057> Veuillez attendre **${timeLeft.toFixed(0)}**s avant de pouvoir retapper la commande.`)
    }
  }
  
  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args);
}