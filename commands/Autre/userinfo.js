const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
   let member = message.member;
   if (args[0]) member = message.guild.member(message.mentions.users.first());
   let user = member.user;
   
   const embed = new MessageEmbed()
   .setColor(message.member.displayHexColor)
   .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true}))
   .setTitle(`${user.username}`)
   .addField(`<:Membres:735207906420588645> Nom :`, `${user.tag}`)
   .addField(`<:IconSlowmode:735211791554183200> Créé le :`, `${moment(user.createdAt).format('DD/MM/YYYY')}`)
   .addField(`<:Liste:735207895863525417> Surnom :`, `${member.nickname === undefined ? '' : `${member.nickname}`}`)
   .addField(`<:IconJoin:735207925370454066> A rejoint le :`, `${moment(member.joinedAt).format('DD/MM/YYYY')}`)
   .addField(`<:Roles:735207542946398279> Roles :`, `${member.roles.cache.map(roles => `${roles}`)}`)

   message.channel.send(embed);
   message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.USERINFO;