const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
    const guild = message.guild;

    const embed = new MessageEmbed()
    .setColor("#39A7F3")
    .setThumbnail(guild.iconURL({ format: 'png', dynamic: true}))
    .setTitle(`${guild.name}`)
    .addField(`<:Proprietaire:735207548658909334> Propriétaire`,`${guild.owner.user}`, true)
    .addField(`<:IconSlowmode:735211791554183200> Créé le`, `${moment(guild.createdAt).format('DD/MM/YYYY')}`, true)
    .addField(`<:Roles:735207542946398279> Roles`, `${guild.roles.cache.size} roles`, true)
    .addField(`<:IconTextChannel:735211943534788721> Salons textuels`, `${guild.channels.cache.filter(ch => ch.type === 'text').size} salons`, true)
    .addField(`<:IconVoiceChannel:735212068084514948> Salons vocaux`, `${guild.channels.cache.filter(ch => ch.type === 'voice').size} salons`, true)
    .addField(`<:Membres:735207906420588645> Nombre de membre`, `${guild.memberCount} membres`, true)

   message.channel.send(embed);
   message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.SERVERINFO;