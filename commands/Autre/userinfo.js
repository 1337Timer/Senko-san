const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
   let member = message.member;
   if (args[0]) member = message.guild.member(message.mentions.users.first());
   let user = member.user;
   
   const embed = new MessageEmbed()
   .setColor(message.member.displayHexColor)
   .setThumbnail(user.displayAvatarURL())
   .setTitle(`${user.username}`)
   .addField(`<:Membres:731206879732301984> Nom :`, `${user.tag}`)
   .addField(`<:Temps:731207221190328372> Créé le :`, `${moment(user.createdAt).format('DD/MM/YYYY')}`)
   .addField(`<:Liste:731919269134205058> Surnom :`, `${member.nickname === undefined ? '' : `${member.nickname}`}`)
   .addField(`<:IconJoin:731919767425777806> A rejoint le :`, `${moment(member.joinedAt).format('DD/MM/YYYY')}`)
   .addField(`<:Roles:731207222264332358> Roles :`, `${member.roles.cache.map(roles => `${roles}`)}`)

   message.channel.send(embed);
   message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.USERINFO;