const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
    message.guild.members.fetch().then(fetchAll => {
        const online = fetchAll.filter(m => m.presence.status === 'online');
        const idle = fetchAll.filter(m => m.presence.status === 'idle');
        const dnd = fetchAll.filter(m => m.presence.status === 'dnd');
        const offline = fetchAll.filter(m => m.presence.status === 'offline');
    
    const embed = new MessageEmbed()
    .setColor("#39A7F3")
    .addField(`<:IconStatusOnline:735207729760829510> En ligne`, `${online.size} membres`)
    .addField(`<:IconStatusIdle:735207706939359312> Inactif(s)`, `${idle.size} membres`)
    .addField(`<:IconStatusDND:735207664140681287> Ne pas déranger`, `${dnd.size} membres`)
    .addField(`<:IconStatusOffline:735207719883112542> Invisible`, `${offline.size} membres`)
    message.channel.send(embed);

    message.delete();
    })
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.ACTIVITY;