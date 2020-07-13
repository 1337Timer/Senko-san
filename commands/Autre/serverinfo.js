const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
    const guild = message.guild;

    const embed = new MessageEmbed()
    .setColor("#39A7F3")
    .setThumbnail(guild.iconURL())
    .setTitle(`${guild.name}`)
    .addField(`<:Proprietaire:731207221123219548> Propriétaire :`,`${guild.owner.user}`)
    .addField(`<:Temps:731207221190328372> Créé le :`, `${moment(guild.createdAt).format('DD/MM/YYYY')}`)
    .addField(`<:Roles:731207222264332358> Roles :`, `${guild.roles.cache.map(roles => `${roles}`)}`)
    .addField(`<:Textuel:731207220611776582> Salons textuels :`, `${guild.channels.cache.filter(ch => ch.type === 'text').size} salons`)
    .addField(`<:Vocal:731207219236044881> Salons vocaux :`, `${guild.channels.cache.filter(ch => ch.type === 'vocal').size} salons`)
    .addField(`<:Membres:731206879732301984> Nombre de membre :`, `${guild.memberCount} membres`)

   message.channel.send(embed);
   message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.SERVERINFO;